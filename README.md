# **Merhaba, projenin amacı belli bir kullanıcı verisini görüntüleyip, kulanıcılarının verilerini değiştirme ,ekleme ve silme işlemleri yapmayı hedefler.**

![User Task](https://lh3.googleusercontent.com/fife/APg5EObAAIlCbnj2YLBIYaMmPgbuFS0Xbr6c84zH6d877cTxIfpY4tJEePpoIWZAWcy4_I7PdpcwZvj84lq9R1TaF-tHtkVKnsb32ONYKMGYRGS1U7lLIb_hq2RjTKT0CMfPDfmKGrBflcbzebMRzzacDW6D1ab_nXjwmfHNH5lZmKPf8ooxYzluRZFQra9U8txJ46WIzy_-DhQv7coI0b2BBQc_1CHT_OAb4iAsiM865GgFErJSnP01PjnS2AC-paLuRsdGMR349bj81w4DMzTpAaYNJ7xLKUCTJfQikus385abmBnqIJI_HkbD7oOmXEDRXErSGL0fP_Le4_b9fzVNPJPmlPplSA7gcX0EcXq4_k5F48ADWFgk_qpuyWxdvAdwdHrW4r85LeUNjPxv6MkLbPYCR3aU1HEhbeFtAMkd0_pzqHw_oon932iEsF08Iu5LDfQpQobHbESB4Y7kw4mwlg6hMsm25DACFIYL-v5-bhtW8aNnK43iX7tvWDlfBdfesaIYCl6ZTYqXaPr281l2nhjaqQkW5U_THNh9YuIgah3cQs1E-QBoF18enMXxuW0T3XumvVgPSfFx83NH4Ephi3l1KJ-WNxDxQ1VkgbTKvgQaywAhhd4JwC6mQCqX6lV7B9PRFVMDArqnOkEdBJj6Lthf3-4yL6Ekdrg0iDbKIRjJ6E82ukGev1SYfbfcNyNnAsgz2gp7LdXTZAZBiIRlwnU9NFTZLD8qbX9W9O9o_o3TQc_IkdUFtiH2Fn312B5XRAh2wRby0duOCp4ewKE3nqChqiQ_YxWyOokwNRaGlFywVDFDKPPnSkTqb6-HeuatE8DTQk1nsBI3-ss6p8YhfR3lqynkW8o2CCGMmLOmMnzOMKvk4USfgJm1nVB48rQBtz-VYALUEcvDL2PjEYLu3QziaYm0y1DJg4wv7XJNaATlK84LhRB5eevK-FRm8Huc3eNSi0hOjIMKUk22MPbmd27RDoKUGZG-T3zztBAuHZgdpeWSFA2X6GA0h1vR_TRIeukpb5wPcYXHkqTQoMlkklZOLboCAOEX-V5Yh9dIihN2UU35u0Bw-JOBjj42KWPQvZGZqMos21EmA-7aN8yD-yoipFKh9Prod3tmlT3xTLh5WfbQR_WUsn_wFTOR_9nTiHPdbAQUzsyKuLbjYxWb9oQdsuST2pznXiz-FdK7ArOGv3l6CASkbTB9SKg_gcHmlhuFi0DQYLXm4PJS5X39bMhI0VHdcEjfQh5MP2xy09CxebWJ0piafGbVqPi5H85NCZUvgjvyc0mXJ1hHCnCXnTtDMD5JtnKGeNxL54b9Y98Z2S0-KArxyzb-YHK9cy2WFan7QmPsaFsIgRKK8nx-LSuRC9aOgs7RCGG_1FUr77kEli7Dzjdkc_wiXckbQBIzy1jnnwwVGGxD-PMZOCHmB9zJXciiYAI8aJYWbup7txP_oPXcE4-smCGGm3LLgJNJneFWcG3kQSo8nQ7Pk0eaRSj-WepA=w1920-h913)
## Kullandığım teknolojiler;

 - React
 - Typescript
 - Tailwind.css
 - Material UI

## App.tsx ' de toplamda 3 tane component kullandım;

 - `<Popup/>` : Seçilen kullanıcıyı düzenlemek ya da yeni kullanıcı eklemek için açılıp kapanan bir popup,
 - `<Userlist/>` : Burada kullancıların görüntülendiği component,
 - `<Pagination/>`: Bu component sayfaları değiştirme işlevi görür


## **Bu projede state managment için useState kullandım.**
Kullanıcı verisi, filtreleme, popup, pagination ve inputlar için useState kullandım.

# `App.tsx`

 - Sayfanın üst tarafında filtreleme için buton'lar,
 - Sağ tarafında yeni kullanıcı eklemek için bir buton,
 - Hemen alt satırında arama barı ve seçili olan kullanıcıları silen bir buton,
 - Görünür olan kullanıcıların tamamını seçen buton

    
 
 `const deleteSelectedUsers  =  ()  =>  {
 const  newUsers  = users.filter((user)  =>  !user.checked); setUsers(newUsers);} 
 ` : **Seçili olan kullanıcıları siler.**

`const  checkedAllUsers  =  ()  =>  {
setUsers((prevUsers)  =>
prevUsers.map((user)  =>  {
if ((user.email.includes(search) || user.username.includes(search)) &&(user.role === filterToUser || filterToUser ===  "All Users")) {return  {  ...user, checked:  !user.checked };} else {return user;}}));};` : **Bu fonksiyonun amacı `<Userlist/>` 'de görünür olan kullanıcılarının tamamını seçer.**

 `useEffect(()  =>  {
setUsers((prevUsers)  =>
prevUsers.slice(page *  10  -  10, page *  10).map((user)  =>  {
const  isVisible  =user.email.includes(search) || user.username.includes(search);
const  isRoleMatched  =
filterToUser ===  "All Users"  || user.role === filterToUser;
const  isChecked  =user.checked && isVisible && isRoleMatched ?  true  :  false;return  {  ...user, checked: isChecked };
}));}, [search, filterToUser]);` : **Bu fonksiyon seçilmiş kullanıcılara eğer tekrardan filtreleme işlemi uygulandığında, seçilme işlemini tekrar yapar ve sadece görürünür olanları seçer.**

# `<Popup/>`

***Kullanıcıyı düzenlemek ve ya yeni kullanıcı eklemek için açılıp kapanan bir popup.***

 - `addNewUser() : Yeni kullanıcı ekler`
 - `editUser() : Seçili olan kullanıcıyı düzenler`


# `<Userlist/>`

***Filtrelenmiş kullanıcı listesini map methodu ile return yapar ve her biri için editlemek ,seçmek ve silmek için butonları olur.***

- `deleteUser() : Kullanıcıyı siler`
- `checkedUser() : Kullanıcıyı seçilmiş olarak işaretler`


# `<Pagination/>`

***Filtrelenmiş ya da filtrelenmemiş kullanıcıları maksimum 10 adetlik alanlara ayırarak sayfa oluşturur.***

- `changePage() : Seçili olan sayfa numarasını değiştirir.`












