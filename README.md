https://github.com/seyityahya/chatqpt_fake_comment_generator/assets/84639970/31ba9bf9-d8e1-4ca1-b7ba-21b65466ad76

Bu proje girilen bir ürün hakkında chatqpt tarafından olumlu ya da olumsuz yorum oluşturmaktadır. Projenin backend'i node.js ile frontend'i react ile yazılmıştır.

Projenin içinde chatqpt API kullanılmıştır. [Buradan](https://platform.openai.com/overview) sizde chatqpt ile uygulama geliştirebilirsiniz.

## Projeyi çalıştırmak için

ilk olarak backend'i çalıştırın

```bash
  cd server
  #and
  npm install
  # and
  npm start
```

daha sonra frontend kısmını ayağa kaldırın

```bash
  cd client
  #and
  npm install
  #and
  npm run dev
```
daha sonra server klasörünün içine .env adında bir dosya kurun ve içine openai keyinizi yazın
```bash
  OPENAI_API_KEY = your_key
```


