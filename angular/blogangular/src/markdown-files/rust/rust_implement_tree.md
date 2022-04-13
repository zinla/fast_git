## implement tree data_structure
```rust
#[allow(dead_code)]
#[allow(unused)]
#[allow(unused_mut)]
#[allow(non_snake_case)]
pub mod tree {
    use std::cell::RefCell;
    #[derive(Debug, PartialEq, Eq, Clone, Default)]
    pub struct TreeNode<T> {
        pub val: T,
        pub left: Option<Box<RefCell<TreeNode<T>>>>,
        pub right: Option<Box<RefCell<TreeNode<T>>>>,
    }
    impl<T> TreeNode<T> {
        pub fn new(val: T) -> Self {
            TreeNode {
                val,
                left: None,
                right: None,
            }
        }
        pub fn insert(&mut self, dir: &str, val: T) {
            match dir.as_ref() {
                "left" => self.left = Some(Box::new(RefCell::new(TreeNode::new(val)))),
                "right" => self.right = Some(Box::new(RefCell::new(TreeNode::new(val)))),
                _ => {
                    println!("Only insert in left or right");
                    std::process::exit(1);
                }
            }
        }
        pub fn delete(&mut self, dir: &str) {
            match dir.as_ref() {
                "left" => self.left = None,
                "right" => self.left = None,
                _ => {
                    println!("delete error: unknown directory");
                    std::process::exit(1);
                }
            }
        }
        pub fn get_height(root: &Option<Box<RefCell<TreeNode<T>>>>) -> i32 {
            fn dfs<T>(root: &Option<Box<RefCell<TreeNode<T>>>>) -> i32 {
                match root {
                    None => 0,
                    Some(node) => {
                        let node = node.borrow();
                        1 + std::cmp::max(dfs(&node.left), dfs(&node.right))
                    }
                }
            }
            dfs(&root)
        }
        // 通过数组反序列化生成一棵树
        pub fn from_vec(nums: Vec<Option<T>>) -> Option<Box<RefCell<TreeNode<T>>>>
        where
            T: Copy + Clone,
            Option<Box<RefCell<TreeNode<T>>>>: Clone,
            Box<RefCell<TreeNode<T>>>: Clone,
        {
            if nums.is_empty() {
                return None;
            }
            let size = nums.len();
            let mut index = 0;
            let root = Some(Box::new(RefCell::new(Self::new(nums[0].unwrap()))));
            let mut queue = std::collections::VecDeque::new();
            queue.push_back(root.clone());
            while !queue.is_empty() {
                let q_size = queue.len();
                for _i in 0..q_size {
                    if let Some(x) = queue.pop_front().flatten() {
                        let mut node = x.borrow_mut();
                        let lseq = 2 * index + 1;
                        let rseq = 2 * index + 2;
                        if lseq < size && nums[lseq].is_some() {
                            node.left =
                                Some(Box::new(RefCell::new(Self::new(nums[lseq].unwrap()))));
                            queue.push_back(node.left.clone());
                        }

                        if rseq < size && nums[rseq].is_some() {
                            node.right =
                                Some(Box::new(RefCell::new(Self::new(nums[rseq].unwrap()))));
                            queue.push_back(node.right.clone());
                        }
                    }
                    index += 1;
                }
            }
            root
        }
        pub fn preorder(root: Option<Box<RefCell<TreeNode<T>>>>) -> Vec<T>
        where
            T: Copy + Clone,
            Option<Box<RefCell<TreeNode<T>>>>: Copy + Clone,
        {
            let mut ans = vec![];
            // 节点进栈，即使 root是None，也没关系。
            let mut stack = vec![root];
            while !stack.is_empty() {
                // 节点出栈则进行模式匹配，过滤不存在的节点 None
                if let Some(node) = stack.pop().flatten() {
                    ans.push(node.borrow().val);
                    // 右子树进栈，None也没关系
                    stack.push(node.borrow().right);
                    // 左子树进栈，None也没关系
                    stack.push(node.borrow().left);
                }
            }
            ans
        }
    }
    pub fn run() {
        let mut tree = TreeNode::new(12);
        tree.insert("left", 147);
        tree.insert("right", 15);
        tree.delete("left");
        println!("{:#?}", tree);
        println!("height:{:#?}", TreeNode::get_height(&tree.right));
        let vec = vec![Some(12), Some(15), Some(16)];
        let vec_tree = TreeNode::from_vec(vec);
        println!("{:#?}", vec_tree);
    }
}

```
