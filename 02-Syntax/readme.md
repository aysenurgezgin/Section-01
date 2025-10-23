# JavaScript:Synytax(söz dizimi)
* JavaScriprt'te komut oluşturabilmek için yazdığımız kod cümlelerine ifade(statment)denir.
* İfadeler birbirinden noktalı virgül ile ayrılır.
* Ancak JS'te ifadelerin sonuna (;)işareti koymak ZORUNLU DEĞİLDİR!
* her ne kadar zorunlu olmasa da ifedelerin sonuna mutluka(;)koymaya dikkat et[esnek bir dil]
! ifade: her komut satırı ayrımda(;)olur
* ecmascript automatic semicolumn insertion TC39(https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-automatic-semicolon-insertion) bunun kolay yöntemi dizi karakteri =[]kullan ve yanına aç kapa parentez içine URL'i yapıştır(); yapımı=
* [ECMAScript Automatic Semicolumn Insertion detaylı bilgi](https://tc39.es/ecma262/multipage/ecmascript-language-lexical-grammar.html#sec-automatic-semicolon-insertion)
* Tanımlayıcıların isimlendirilmesi ile ilgili Hususlar; 
    * Tanımlayıcı(değişken, fonksiyon vb) adları alt çizgi, dolar işareti ve harf ile başlayabilir. Yani ( _ ) ve  ( $ ) özel karakter ya da rakamla başlayamaz.
    * Tanımlayıcı adları küçük/BÜYÜK harf duyarlıdır!
    * İSİMLENDİRME YAPARKEN TÜRKÇE KARAKTER KULLANMA!
    * isimlendirme Yöntemleri(her programlama dilinde geçerli)
        * CAMEL CASE:
            En çok kullanılan isimlendirme yöntemlerinden biridir.Sözcüklerin ilk harfi büyük geri kalan harfleri küçük yazılır. İki kullanım şekli vardır;
            * upper camel case: Buna Pasal case de denir. ör:AdSoyad, DogumTarihi, KdvOranı
            * lower camel case: İlk sözcğk tamamen küçük, geri kalanların ise ilk harfi büyük ,geri kalanları küçük yazılır. ör: adSoyad, dogumTarihi, kdvOrani
        * Snake case:
            Sözcükler birbirinden (_) ile ayrılır. upper, lower ve screaming versiyonları vardır. ör: Ad_Soyad, ad_soyad, dogum_tarihi, Dogum_Tarihi, AD_SOYAD, DOGUM_TARIHI
        * Diğer

    * Java Script Name Conventions
        * Değişkenler:
            * Büyük küçük harf duyarlı.
            * camelCase kullanılır,harfle başlanır.
            * İçindeki değeri açıklayıcı nitelikte.
            * Mantıksal(Boolean) değişkenler genellikle is ya da has ifadesiyle başlatılır.
            * İngilizce kavramlar kullan
        * Fonksiyon ve Sınıf Metotları:
            * Büyük küçük harf duyarlı.
            * camelCase kullanılır, harfle başlanır.
            * Genelde get, make, apply gibi emir kipi ile başlamalı.
        * Sabitler:
            * Büyük küçük harf duyarlı.
            * Screaming Snake Case kullanılır.
            * Genelde en üstte olur.
        * Sınıflar:
            * Büyük küçük harf duyarlı.
            * PascalCase kullanılır, harfle başlanır.
            * Sınıfın işlevselliğini açıklayıcı nitelikte.
        * Private:
        * _ ile başlar.


* Resmi Dökümantasyon: [ECMAScript Offical Documentation](https://tc39.es/ecma262)

* MDN Javascript Tutorial: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

    