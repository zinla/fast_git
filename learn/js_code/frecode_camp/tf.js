class NeuralNetwork {

    /**
     * 三个参数分别代表输入层/隐藏层/输出层的神经元个数
     * @constructor
     * @param {number} input_nodes
     * @param {number} hidden_nodes 
     * @param {number} output_nodes 
     */
    constructor(input_nodes, hidden_nodes, output_nodes) {

        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        // Initialize random weights
        this.input_weights = tf.randomNormal([this.input_nodes, this.hidden_nodes]);
        this.output_weights = tf.randomNormal([this.hidden_nodes, this.output_nodes]);
    }

    /**
     * 输入一个向量, 进行前向传播计算输出值
     * @param {array} - Array of inputs
     */

    predict(user_input) {
        let output;
        tf.tidy(() => {
            /* Takes a 1D array */
            let input_layer = tf.tensor(user_input, [1, this.input_nodes]);
            let hidden_layer = input_layer.matMul(this.input_weights).sigmoid();
            let output_layer = hidden_layer.matMul(this.output_weights).sigmoid();
            output = output_layer.dataSync();
        });
        return output;
    }

    /**
     * 返回一个新的实例, 复制权重
     * @returns {NeuralNetwork}
     */
    clone() {
        let clonie = new NeuralNetwork(this.input_nodes, this.hidden_nodes, this.output_nodes);
        clonie.dispose();
        clonie.input_weights = tf.clone(this.input_weights);
        clonie.output_weights = tf.clone(this.output_weights);
        return clonie;
    }

    /**
     * 处理内存中的输入和输出权重
     */
    dispose() {
        this.input_weights.dispose();
        this.output_weights.dispose();
    }
}

class Generation {

    /**
     * 输入生物群大小/也就是生物的个数
     * @constructor
     * @param {number} population - The population Size
     */

    constructor(population) {
        this.population = population;
        this.species = [];
        this.generation = 1;
        this.high_score = 0;
        this.avg_score = 0;
        this.total_score = 0;
        this.fitness = 0;
        this.progress = 0;
    }

 
    /**
     * 创建种群
     * @param {object}
     */

    initialize(Person) {
        for (let i = 0; i < this.population; i++) {
            let new_Person = new Person({
                upper_length: 30,
                upper_width: 8,
                lower_length: 30,
                lower_width: 6,
                x: width * 0.15,
                y: height * 0.85,
                id: i
            });
            this.species.push(new_Person);
        }
    }

    /**
     * 从种群中筛选一个人作为育种候选人
     * fitness高的人更容易被选出来
     * @returns A Person
     */

    pickOne() {
        let index = 0;
        let r = Math.random();
        while (r > 0) {
            r -= this.species[index].fitness;
            index += 1;
        }

        index -= 1;

        let selected = this.species[index].clone();
        return selected;
    }

    evolve() {

        // 保存高分
        this.generation += 1;
        let gen_highscore = Math.max.apply(Math, this.species.map(o => o.score));
        this.high_score = gen_highscore > this.high_score ? gen_highscore : this.high_score;

        // 计算种群总分
        let total_score = 0;
        this.species.forEach((person) => { total_score += person.score });

        // 计算每个人的性能(适应能力)
        this.progress = (total_score / this.population) - this.avg_score
        this.avg_score = total_score / this.population;
        for (let i = 0; i < this.population; i++) {
            this.species[i].fitness = this.species[i].score / total_score;
        };

        // 新一代种群保存在这个列表里
        let new_generation = [];

        // 繁殖
        for (let i = 0; i < this.population; i++) {
            let parentA = this.pickOne();
            let parentB = this.pickOne();
            let child = parentA.crossover(parentB);
            child.mutate();
            child.id = i;
            child.params.id = i;
            child.colors = [parentA.colors[0], parentB.colors[1]];
            child.parents = [{ id: parentA.id, score: this.species[parentA.id].score }, { id: parentB.id, score: this.species[parentB.id].score }];
            new_generation.push(child);
        }

        // 杀死这个老种群
        // i.e. Remove their bodies from MatterJS World and dispose their brain
        for (let i = 0; i < this.population; i++) {
            this.species[i].kill(world);
        }
        
        // 将新一代种群添加到这里
        this.species = new_generation;
        for (let i = 0; i < this.population; i++) {
            this.species[i].add_to_world(world);
        }
    }
}