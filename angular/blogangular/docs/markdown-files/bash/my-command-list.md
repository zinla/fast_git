# my-command-list

## conda activate:

```sh
source /opt/anaconda/bin/activate google
```

## commen MySQL command

```bash
 sql account and password
 root@localhost: Ub<%Jpueg56L
 
系统启动自启动
sudo systemctl enable mysqld.service

启动MySQL 服务
启动命令如下：
sudo systemctl start mysqld.service

查看 MySQL 服务状态
systemctl status mysqld.service
```

## use labelme (数据标记的步骤)

```sh
1.source /opt/anaconda/bin/activate google
pip install labelme //已经装好了
//执行1以后
lable  // to open  from 51 start
```

## use ffmpeg

```sh
视频转化为 mp3
ffmpeg -i Bob_Proctor.mp4 -vn bob_proctor.mp3

使用的条件是：视频文件中没有音频
ffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict experimental output.mp4

video.mp4,audio.wav 分别是要合并的视频和音频，output.mp4 是合并后输出的音视频文件。
下面的命令是用 audio 音频替换 video 中的音频
ffmpeg -i video.mp4 -i audio.wav -c:v copy -c:a aac -strict experimental -map 0:v:0 -map 1:a:0 output.mp4
```

## dart web error :Can'nt open dart web serve

```
pub global activate webdev
webdev serve
```

## yay command

```
Example 1: Install package using yay
Use the option `-S` to install a package from AUR using yay.
yay -S package

Example 2: Remove package using yay
To remove a package, use `-Rns` options:
yay -Rns package

Example 3: Launch a package selection menu
Use:
yay <Search Term>

Example 4: Upgrade installed packages using yay
To upgrade all installed packages, use the options :
yay -Syu

To include development packages, use:
yay -Syu --devel --timeupdate

Example 5: Cleans unneeded dependencies using yay
Use the options to remove all unneeded dependencies on your system:
yay -Yc

remove all of these unnecessary packages with the following command:
sudo pacman -R $(pacman -Qdtq)


Example 6: Prints system statistics using yay
To print system stats, use `-Ps`
yay -Ps

Example 7: Generates development package DB used for devel updates
yay -Y --gendb
yay -Scc            #清理缓存，看路径像是之前下载的安装包

```

## use git

```
git init
git lfs track "*.ipynb" "*.zip" "*.7z"
git add .
git commit -m "python_code"
git remote add origin git@e.coding.net:googleteam/data_mining/python_code.git
git push -u origin master

//删除origin地址
git remote rm origin

//改为一行
git init && git add . && git commit -m "bookmark" && git remote add origin git@e.coding.net:googleteam/my_code/book_mark.git && git push -u origin master

```

## linux find dir or file

```
find ./code -name .git  -d
find ./code -name command_list.md -d
```

## File statistics

```
du -sh  # 显示当前文件夹的大小
du -lh --max-depth=1  # 列出当前文件夹下各个目录的大小
df -lh  # 列出当前文件系统的空间使用情况
```

## View disk use

```
yay -S baobab
baobab  //启动
```

## Open sunloginclient

```
systemctl start runsunloginclient.service
sunloginclient
```

## Conda env

```shell
创建环境
conda create -n env_name python=3.7

删除虚拟环境：
conda remove -n your_env_name(虚拟环境名称) --all

删除虚拟环境中的包：
conda remove --name $your_env_name  $package_name（包名）

退出虚拟环境：
Linux：
source deactivate your_env_name(虚拟环境名称)
Windows：
deactivate env_name
```

## nvim init.vim

```vim
/home/andry/.config/nvim/init.vim

map td :tabnew .<cr>
map tp :tabprevious <cr>
map tn :tabnext<cr>
map jk :w!<cr>
map <C-F> :!cargo fmt<cr>
map <C-R> :!cargo fmt && cargo run<cr>
```

## install QQ

```sh
yay -S deepin-wine-qq
```

## install wechat

```
dema https://ghproxy.com/https://github.com/vufa/deepin-wine-wechat-arch/releases/download/v3.5.0.46-2/deepin-wine-wechat-3.5.0.46-2-x86_64.pkg.tar.zst
yay -U deepin-wine-wechat-3.5.0.46-2-x86_64.pkg.tar.zst
```

## My rust crates.iotoken

```rust
https://crates.io/settings/tokens
my_token:
ciovhv82RNaCK2AjAvHJE0SiQW8hjyKgrGw
```

## yarn and npm

```sh
yarn config get registry
yarn config set registry https://registry.npm.taobao.org/

npm config get registry
npm config set registry https://registry.npm.taobao.org/

//恢复官方源
yarn config set registry https://registry.yarnpkg.com
npm config set registry https://registry.npmjs.org

npm config set registry https://mirrors.sjtug.sjtu.edu.cn/npm-registry
yarn config set registry https://mirrors.sjtug.sjtu.edu.cn/npm-registry
```

## Angular

```
//While creating a new project
ng new angularguard

//Component
ng generate component components/footer --module=app.module //optional
ng generate component components/footer
ng g c articles/git/git_guide

//Service
ng generate service service/ui

//Test dist
serve dist/

//json-serve
!install
npm i json-server
!package.json add
"server": "json-server --watch db.json --port 7000"
!and run
yarn server

//使用antidesign
ng g ng-zorro-antd:notification-with-icon anticomponent/false --module=app.module

//Angular开发，提示 Object is possibly 'null' 恼人的提示，谁有那时间写出完美的代码呢，有null是正常的。这提示该关闭。网上找到了关闭的方法：
tsconfig.json > compilerOptions, 增加：
"strictNullChecks":false

//angular pulish to github
//把生成的inde.html 复制成404.html ,把整个docs 文件夹里的资源上传就好了
ng build --output-path docs --base-href /alenandry.github.io/

//部署到 GitHub Pages
git push -u origin main
```

## Vscode save and run command

```json
atom ~/.config/Code/User/settings.json
//添加saveAndRun
{
    "workbench.colorTheme": "Monokai",
    "explorer.confirmDelete": false,
    "latex-workshop.view.pdf.viewer": "tab",
    "editor.formatOnSave": true,
    "files.autoSave": "afterDelay",
    "window.zoomLevel": 1,
    "saveAndRun": {
        "commands": [
            {
                "match": "Demo.tex",
                "cmd": "bash compile.sh",
                "useShortcut": false,
                "silent": false
            }
        ]
    }
}
```

## latex commen syntax

```tex
一行对齐
\leftline{左对齐}
\centerline{居中}
\rightline{右对齐}
多行或者段落对齐
左对齐 \begin{flushleft}...\end{flushleft}
居中 \begin{center}...\end{center}
右对齐 \begin{flushright}...\end{flushright}

加粗 \textbf{步骤3：}

```

## fast delete some folder 

```sh
#copy save to delete.sh   bash delete.sh ./some_ir
mkdir empty && rsync -r --delete empty/ $1 && rmdir $1
rmdir empty
```

## record screen and save .gif

```sh
yay -S peek
peek
```

## simple screenshot sotfware

```sh
yay -S xfce4-scrennshoter
```

![image-20220310093334431.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7f37bcd09f7f49a8a4bc31b6b041f65a~tplv-k3u1fbpfcp-watermark.image?)
