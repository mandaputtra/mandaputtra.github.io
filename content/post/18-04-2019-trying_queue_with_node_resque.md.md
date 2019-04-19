---
id: 2
title: Trying Queue with node-resque
created_date: 18/04/2019
slug: trying_queue_with_node_resque
filename: 18-04-2019-trying_queue_with_node_resque.md
category: tutorial
---

Hi, kali ini saya akan membahas bagaimana cara kita memanfaatkan fitur *background jobs* atau *queue* (antrian) yang bakalan sering kita gunakan.

## Use Case!

Biasanya *queue* kit gunakan untuk memisahkan sebuah proses yang bisa mem-*block main-thread* pada aplikasi kita. Jadi misal saat user kita ingin mengirim email kepada ribuan temannya secara langsung