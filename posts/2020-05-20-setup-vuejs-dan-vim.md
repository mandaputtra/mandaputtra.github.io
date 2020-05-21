---
tags: ["vim", "tips"]
title: "Konfigurasi Vim dengan Vue.js"
description: "Agar ngoding lama, ga mikirin error tapi mikirin shortcut Vim"
date: 2020-05-20
---

Vim dan segala pemujanya.

Banyak orang yang pakai Vim pada bilang membangkitkan produktifitas kita sebagai programmer, dikarenakan kita tidak usah sering sering menggunakan mouse untuk klik sana klik situ. Atau untuk beberapa task seperti bikin komentar di code, hapus sebagian code, dsb.

Bisa dibilang itu bener, bisa dibilang juga tidak haha.

Alasan saya belajar Vim karena ringan itu aja. Saya masih inget dulu pas jadi programmer pakai laptop bapuk, buka VSCode aja rasanya berat minta ampun ~ jadi saya dulu sering gunain `nano`. Bayangkan sadja [HMR](https://webpack.js.org/concepts/hot-module-replacement), VSCode, dan Chrome, laptop 2Gbmu bakal ngadat minta udahan.

## NeoVim

Saya pakai [NeoVim](https://neovim.io/) karena om [nusendra](https://nusendra.com/post/how-to-setup-my-personal-vim) pakai itu juga, jadi tanyakan ke-dia jangan saya.

## Plugin Manager

Nah ini nih, banyak sekali plugin manager di ranah Vim, personal saya pilih [vim-plug](https://github.com/junegunn/vim-plug) dikarenakan saya tergoda dengan kata minimalis. Pokoknya tinggal `Plug 'nama-orang-yang-bikin/package` lalu `:PlugInstall` ter install deh plugin yang kamu mau.

Install-nya pun gampang coy :

```bash
  $ curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
      https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

Lalu tinggal kamu install deh pluggin yang mungkin kamu perluin. Tulis ini pada `.config/nvim/init.vim`

```vim
  " Contoh installasi plugin di vim-plug
  call plug#begin('~/.vim/plugged')

  " install vim-sensible
  Plug 'tpope/vim-sensible'
  Plug 'morhetz/gruvbox' " install tema vim gruvbox

  call plug#end()
```

Close vim-nya pakai `:wq` buka lagi, terus jalanin command `:PlugInstall` ter-install deh plugin-nya.

## Setup Auto Complete dan Vue

Untuk autocomple saya pilih [coc](https://github.com/neoclide/coc.nvim). Karena coc punya banyak plugin, seperti coc-prettier, coc-eslint, coc-vetur, jadi ya tidak ada salahnya untuk pakai itu. Segala developement saya sehari hari JS, Vue, PHP sudah ada plugin-nya di coc, tentu coc juga ringan walapun di tulis pakai JS (Type Script).

Berikut silahkan lihat [disini]() untuk konfigurasi coc saya.

Nah untuk vue, prettier, dan eslint saya saranin gausah dah pakai plugin lain, prettier, dan eslint juga punya plugin untuk coc, jadi saya pakai aja dah.

```bash
  # run di dalam command vim SHIFT + :
  :CocInstall coc-vetur coc-eslint coc-prettier coc-json
```

Setelah di install jangan lupa juga untuk setup si **coc-settings.json**-nya. Contoh seperti punya saya [juga boleh]().

Setelah itu kita konfigurasi
