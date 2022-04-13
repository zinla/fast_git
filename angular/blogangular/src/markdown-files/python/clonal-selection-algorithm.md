## clonal-selection-algorithm

```python
import numpy as np
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D

def fun(x,y):
    return 21.5+x*np.sin(4*x*np.pi)+y*np.sin(20*y*np.pi)


Xs = np.linspace(-2.9, 12.0, 100) ##-2.9~12.0区间内的等间隔的100个点
Ys = np.linspace(4.2, 5.7, 100)

np.random.seed(0)  # 令随机数种子=0，确保每次取得相同的随机数

# 初始化原始种群
population_x = np.random.uniform(-2.9, 12.0, 10)  # 在[-1,2)上以均匀分布生成10个浮点数，做为初始种群
population_y = np.random.uniform(4.2, 5.7, 10)

for popx, popy, fit in zip(population_x,population_y,fun(population_x,population_y)):
    print("初始化原始种群的 x=%5.2f, y=%5.2f, fit=%.2f" % (popx,popy,fit))

# 新建一个画布
figure = plt.figure()
# 新建一个3d绘图对象
ax = Axes3D(figure)

# 生成x, y 的坐标集 (-2,2) 区间，间隔为 0.1
x = np.linspace(-2.9, 12.0, 20)
y = np.linspace(4.2, 5.7, 17)

# 生成网格矩阵
X, Y = np.meshgrid(x,y)

# 定义x,y 轴名称
plt.xlabel("x")
plt.ylabel("y")

Z= 21.5+X*np.sin(4*X*np.pi)+Y*np.sin(20*Y*np.pi)
# 设置间隔和颜色
ax.plot_surface(X, Y, Z, rstride=1, cstride=1, cmap="rainbow",alpha=0.5)
#ax.plot_wireframe(X,Y,Z)
ax.set_zlim(0, 40)
ax.plot(population_x,population_y,fun(population_x,population_y),'ko')
# 展示
plt.show()


def encode_x(population, _min=-2.9, _max=12.0, scale=2**21, binary_len=21):  # population必须为float类型，否则精度不能保证
    # 标准化，使所有数据位于0和1之间,乘以scale使得数据间距拉大以便用二进制表示
    normalized_data = (population-_min) / (_max-_min) * scale
    # 转成二进制编码
    binary_data = np.array([np.binary_repr(x, width=binary_len)
                           for x in normalized_data.astype(int)])
    return binary_data
def encode_y(population, _min=4.2, _max=5.7, scale=2**18, binary_len=18):  # population必须为float类型，否则精度不能保证
    # 标准化，使所有数据位于0和1之间,乘以scale使得数据间距拉大以便用二进制表示
    normalized_data = (population-_min) / (_max-_min) * scale
    # 转成二进制编码
    binary_data = np.array([np.binary_repr(x, width=binary_len)
                           for x in normalized_data.astype(int)])
    return binary_data
def encode_v(population_x,population_y):
    chroms_x = encode_x(population_x)
    chroms_y = encode_y(population_y)
    chroms_v = np.char.add(chroms_x,chroms_y)
    return chroms_v
 # 染色体英文(chromosome)
# chroms_x = encode_x(population_x)
# chroms_y = encode_y(population_y)
chroms_v = encode_v(population_x,population_y)
print(chroms_v)

# for popx, popy, chromx_x, chromx_y, fit in zip(population_x, population_y, chroms_x, chroms_y, fun(population_x,population_y)):
#     print("x=%.2f, x=%.2f, chrom_x=%s, chrom_y=%s, fit=%.2f" % (popx, popy, chromx_x, chromx_y, fit))

def decode_x(popular_gene, _min=-2.9, _max=12.0, scale=2**21):  # 先把x从2进制转换为10进制，表示这是第几份
    # 乘以每份长度（长度/份数）,加上起点,最终将一个2进制数，转换为x轴坐标
    return np.array([(int(x, base=2)/scale*14.9)+_min for x in popular_gene])
def decode_y(popular_gene, _min=4.2, _max=5.7, scale=2**18):  # 先把x从2进制转换为10进制，表示这是第几份
    # 乘以每份长度（长度/份数）,加上起点,最终将一个2进制数，转换为x轴坐标
    return np.array([(int(x, base=2)/scale*1.5)+_min for x in popular_gene])
def decode_v(chroms_v):
    chroms_x = []
    chroms_y = []
    for chv in chroms_v:
        tempx = chv[:21]
        tempy = chv[21:]
        chroms_x.append(tempx)
        chroms_y.append(tempy)
    dechroms_x = decode_x(chroms_x)
    dechromx_y = decode_y(chroms_y)
    return dechroms_x,dechromx_y
dechroms_x,dechroms_y = decode_v(chroms_v)

print(dechroms_x)
print(dechroms_y)
fitness = fun(dechroms_x,dechroms_y)
print(fitness)

# for popx, popy, chromx_x, chromx_y, dechromx_x, dechromx_y, fit in zip(population_x, population_y, chroms_x, chroms_y, fun(population_x,population_y)):
#     print("x=%.2f, x=%.2f, chrom_x=%s, chrom_y=%s, dechrom_x=%.2f, dechrom_y=%.2f, fit=%.2f" % (popx, popy, chromx_x, chromx_y, dechromx_x, dechromx_y, fit))


fitness = fitness - fitness.min() + 0.000001  # 保证所有的都为正
print(fitness)


def Select_Crossover(chroms, fitness, prob=0.6):  # 选择和交叉
    probs = fitness/np.sum(fitness)  # 各个个体被选择的概率
    probs_cum = np.cumsum(probs)  # 概率累加分布

    each_rand = np.random.uniform(size=len(fitness))  # 得到10个随机数，0到1之间

    # 轮盘赌，根据随机概率选择出新的基因编码
    # 对于each_rand中的每个随机数，找到被轮盘赌中的那个染色体
    newX = np.array([chroms[np.where(probs_cum > rand)[0][0]]
                    for rand in each_rand])

    # 繁殖，随机配对（概率为0.6)
    # 6这个数字怎么来的，根据遗传算法，假设有10个数，交叉概率为0.6，0和1一组，2和3一组。。。8和9一组，每组扔一个0到1之间的数字
    # 这个数字小于0.6就交叉，则平均下来应有三组进行交叉，即6个染色体要进行交叉
    pairs = np.random.permutation(int(len(newX)*prob//2*2)).reshape(-1, 2)  # 产生6个随机数，乱排一下，分成二列
    point = np.random.randint(38)  # 交叉方法采用随即交叉法
    for i, j in pairs:
        # 在中间位置交叉
        x, y = newX[i], newX[j]
        newX[i] = x[:point] + y[point:]  # newX的元素都是字符串，可以直接用+号拼接
        newX[j] = y[:point] + x[point:]
    return newX


chroms_v = Select_Crossover(chroms_v, fitness)

dechroms_x,dechroms_y = decode_v(chroms_v)
fitness = fun(dechroms_x,dechroms_y)

# for gene, dec, fit in zip(chroms, dechroms, fitness):
#     print("chrom=%s, dec=%5.2f, fit=%.2f" % (gene, dec, fit))

# 对比一下选择和交叉之后的结果
# fig, (axs1, axs2) = plt.subplots(1, 2, figsize=(14, 5))
# axs1.plot(Xs, fun(Xs))
# axs1.plot(population, fun(population), 'o')
# axs2.plot(Xs, fun(Xs))
# axs2.plot(dechroms, fitness, '*')
# plt.show()

# 输入一个原始种群1，输出一个变异种群2  函数参数中的冒号是参数的类型建议符，告诉程序员希望传入的实参的类型。函数后面跟着的箭头是函数返回值的类型建议符，用来说明该函数返回的值是什么类型。


def Mutate(chroms: np.array):
    prob = 0.1  # 变异的概率
    clen = len(chroms[0])  # chroms[0]="111101101 000010110"    字符串的长度=18
    m = {'0': '1', '1': '0'}  # m是一个字典，包含两对：第一对0是key而1是value；第二对1是key而0是value
    newchroms = []  # 存放变异后的新种群
    each_prob = np.random.uniform(size=len(chroms))  # 随机10个数

    for i, chrom in enumerate(chroms):  # enumerate的作用是整一个i出来
        if each_prob[i] < prob:  # 如果要进行变异(i的用处在这里)
            pos = np.random.randint(clen)  # 从18个位置随机中找一个位置，假设是7
            # 0~6保持不变，8~17保持不变，仅将7号翻转，即0改为1，1改为0。注意chrom中字符不是1就是0
            chrom = chrom[:pos] + m[chrom[pos]] + chrom[pos+1:]
        newchroms.append(chrom)  # 无论if是否成立，都在newchroms中增加chroms的这个元素
    return np.array(newchroms)  # 返回变异后的种群


newchroms_v = Mutate(chroms_v)


def DrawMax(x_data,y_data):
    plt.figure()
    ax = plt.gca()
    ax.set_xlim(0,1000)
    ax.set_ylim(0,40)
    ax.locator_params('x',nbins=10)
    ax.locator_params('y',nbins=8)
    plt.plot(x_data,y_data)
    plt.show()


def DrawTwoChroms(chroms1, chroms2, fitfun):  # 画2幅图，左边是旧种群，右边是新种群，观察平行的两幅图可以看出有没有差异
    # 新建一个画布
    figure = plt.figure()
    # 新建一个3d绘图对象
    ax1 = figure.add_subplot(1,2,1,projection='3d')
    ax2 = figure.add_subplot(1,2,2,projection='3d')

    # 生成x, y 的坐标集 (-2,2) 区间，间隔为 0.1
    x = np.linspace(-2.9, 12.0, 20)
    y = np.linspace(4.2, 5.7, 18)

    # 生成网格矩阵
    X, Y = np.meshgrid(x,y)

    # 定义x,y 轴名称
    plt.xlabel("x")
    plt.ylabel("y")
    # 设置间隔和颜色


    #ax.plot_wireframe(X,Y,Z)
    ax1.set_zlim(0, 40)
    ax2.set_zlim(0, 40)
    dechroms_x,dechroms_y = decode_v(chroms1)
    fitness = fitfun(dechroms_x,dechroms_y)
    ax1.plot_surface(X, Y, fitfun(X,Y), rstride=3, cstride=2, cmap="rainbow",alpha=0.65)
    ax1.plot(dechroms_x,dechroms_y,fitness,'k.')

    newdechroms_x,newdechroms_y = decode_v(chroms2)
    fitness = fitfun(newdechroms_x,newdechroms_y)
    ax2.plot_surface(X, Y, fitfun(X,Y), rstride=3, cstride=2, cmap="rainbow",alpha=0.65)
    ax2.plot(newdechroms_x,newdechroms_y,fitness,'k.')
    plt.show()


# 对比一下变异前后的结果
# DrawTwoChroms(chroms, newchroms, fun)

# 上述代码只是执行了一轮，这里反复迭代
np.random.seed(0)

population_x = np.random.uniform(-2.9, 12.0, 100)  # 在[-1,2)上以均匀分布生成10个浮点数，做为初始种群
population_y = np.random.uniform(4.2, 5.7, 100)# 这次多找一些点
chroms_v = encode_v(population_x,population_y)
x_data=[]
for i in range(1001):
    x_data.append(i)
y_data = []
for i in range(1000):

    dechroms_x,dechroms_y = decode_v(chroms_v)
    fitness = fun(dechroms_x,dechroms_y)
    fitmax = np.max(fitness)
    y_data.append(fitmax)
    fitness = fitness - fitness.min() + 0.000001  # 保证所有的都为正
    newchroms_v = Mutate(Select_Crossover(chroms_v, fitness))
    if i % 300 == 1:
        DrawTwoChroms(chroms_v, newchroms_v, fun)
    chroms_v = newchroms_v

dechroms_x,dechroms_y = decode_v(chroms_v)
fitness = fun(dechroms_x,dechroms_y)

fitmax = np.max(fitness)
y_data.append(fitmax)

DrawTwoChroms(chroms_v, newchroms_v, fun)

print(len(y_data))
DrawMax(x_data,y_data)
print('函数的最大值为：')
print(np.max(fitness))
```

