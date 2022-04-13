#使用方法
#cargo run -- -a rust -b "nim-game" -c 73
# bash add_post.sh rust "Jewels and Stones" 75
./angular_create-new_post -a $1 -b "$2" -c $3
# ./angular_create-new_post -n "Jewels and Stones" -p rust

#add data.service
code ./src/app/service/ui-data.ts
#  {
#         num: '57',
#         date: '2022-01-03',
#         title: 'Rust implment matrix',
#         content: 'Rust implment matrix operation methods',
#         category: 'Rust',
#   },

#下一步 ./src/app/app-routing.module.ts
# code ./src/app/app-routing.module.ts
# { path: '57', component: RustImplmentMatrixComponent },



