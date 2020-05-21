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

Berikut silahkan lihat [disini](https://github.com/mandaputtra/dotfiles/blob/master/nvim/plug-config/coc.vim) untuk konfigurasi coc saya.

Nah untuk vue, prettier, dan eslint saya saranin gausah dah pakai plugin lain, prettier, dan eslint juga punya plugin untuk coc, jadi saya pakai aja dah.

```bash
  # run di dalam command vim SHIFT + :
  :CocInstall coc-vetur coc-eslint coc-prettier coc-json
```

Setelah di install jangan lupa juga untuk setup si **coc-settings.json**-nya. Contoh seperti punya saya [juga boleh](https://github.com/mandaputtra/dotfiles/blob/master/nvim/coc-settings.json).

Setelah itu kita konfigurasi syntax highlighting-nya nih.

Untuk syntax highlighting, saya pakai [vim-vue-plugins](https://github.com/leafoftree/vim-vue-plugin). Kenapa kok begitu? Karena kita tau sendiri Vue punya struktur [SFC](https://vuejs.org/v2/guide/single-file-components.html), HTML, CSS, dan JS dalam satu komponen.

Installasi plugin tersebut sama seperti yang lain, tetapi kita harus menambahkan satu lagi konfigurasi. Seperti berikut.

```vim
  let g:LanguageClient_serverCommands = {
    \ 'vue': ['vls']
    \ }
```

Selesai juga akhirnya konfigurasi kita, paling tidak vim-mu terlihat di video ini pas [ngedit komponen vue](https://streamable.com/tpj9xu)

Nah ~ waktunya kesimpulan

## Kesimpulan

Haruskah pakai Vim? Tidak, ga perlu. Saya cuma pengen tangan saya ga bayak pindah dari keyboard aja, biar ga kena [RSI](https://en.wikipedia.org/wiki/Repetitive_strain_injury) dan kalau misal ada kondisi darurat saya harus pakai laptop dengan spek rendah paling tidak ada editor yang bisa saya pakai.

Ingin pakai vim tapi ga pingin konfigurasi? Gampang pakai saja [SpaceVim](https://spacevim.org/). Semua konfigurasi macam syntax, autocomplete, terminal, file navigasi dan lain - lain sudah disediakan :)

Seberapa cepat kita dapat migrasi editor ke Vim? Kalau dipakai terus saya yakin bakal cepet bisa. Untuk sementara ini saya masih 1 Minggu pakai. Waktu kerja saya masih pakai VSCode. Vim cuma saya pakai saat ngedit proyek - proyek hobi. Mungkin 1 - 2 bulan lagi saya akan _full-vim_.

## Catatan

- Kalau ingin lebih mudah soal syntax highlighting, om bisa pakai [vim-vue](https://github.com/posva/vim-vue)
- Beberapa video dari [toughbout di youtube](https://www.youtube.com/watch?v=XA2WjJbmmoM&list=PL8tzorAO7s0jy7DQ3Q0FwF3BnXGQnDirs) sangat bagus buat latian / konfigurasi vim
- Lebih baik jangan copas, setup vim orang lain ~ kadang break haha. Mending contih plugin yang dia pakai dan setup sendiri
