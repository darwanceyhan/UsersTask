### ***Merhaba, projenin amacı belli bir kullanıcı verisini görüntüleyip, kulanıcılarının verilerini değiştirme ,ekleme ve silme işlemleri yapmayı hedefler.***

## Kullandığım teknolojiler;

 - REACT
 - TYPESCRİPT
 - TAİLWİND.CSS
 - MATERIAL Uİ

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

 - `addNewUser() : Yeni kullanıcı ekler`
 - `editUser() : Seçili olan kullanıcıyı düzenler`


# `<Userlist/>`

***Filtrelenmiş kullanıcı listesini map methodu ile return yapar ve her biri için editlemek ,seçmek ve silmek için butonları olur.***

-`deleteUser() : Kullanıcıyı siler`
-`checkedUser() : Kullanıcıyı seçilmiş olarak işaretler`


# `<Pagination/>`

***Filtrelenmiş ya da filtrelenmemiş kullanıcıları maksimum 10 adetlik alanlara ayırarak sayfa oluşturur.***

-`changePage() : Seçili olan sayfa numarasını değiştirir.`










