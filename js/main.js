var config = {
    apiKey: "AIzaSyBoUfe6IAw5x0sfnDHMa2ayx0AFA7oSb-E",
    authDomain: "action-d233a.firebaseapp.com",
    databaseURL: "https://action-d233a.firebaseio.com",
    storageBucket: "action-d233a.appspot.com",
  };
  firebase.initializeApp(config);

var fbProvider = new firebase.auth.FacebookAuthProvider();
var myFirebaseRef = new Firebase("https://action-d233a.firebaseio.com/");
ImageDealer.REF = firebase;

var user;
var items = firebase.database().ref(items);


$("#signin").click(function () {
  
  firebase.auth().signInWithPopup(fbProvider).then(function(result) {
    user = result.user;
    var updateUser = {};
    updateUser["/"+user.uid+"/name"] = user.displayName;
    updateUser["/"+user.uid+"/picURL"] = user.photoURL;
    firebase.database().ref("users").update(updateUser);
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessa = error.message;
    console.log(errorCode,errorMessa);
  })


});


firebase.auth().onAuthStateChanged(function(user){
  if(user){
    logginOption(true);
  }else{
    logginOption(false);
  }
})


$("#signout").click(function () {
firebase.auth().signOut().then(function(){
},function(error){
  console.log(error.code);
})
});

$("#submitData").click(function () {
    // 上傳新商品
    var title= $("#item-info").find("[name=itemName]").val();
    var price= $("#item-info").find("[name=price]").val();
    var descrip= $("#item-info").find("[name=descrip]").val();
   
    items.push({"title":title, "price":price,
    "descrip":descrip, "pic":pic});
    
    

   
})


$("#editData").click(function () {
    // 編輯商品資訊
})

$("#removeData").click(function () {
    //刪除商品
})


/*
    商品按鈕在dropdown-menu中
    三種商品篩選方式：
    1. 顯示所有商品
    2. 顯示價格高於 NT$10000 的商品
    3. 顯示價格低於 NT$9999 的商品

*/


function logginOption(isLoggin) {
  if (isLoggin) {
    $("#upload").css("display","block");
    $("#signin").css("display","none");
    $("#signout").css("display","block");
  }else {
    $("#upload").css("display","none");
    $("#signin").css("display","block");
    $("#signout").css("display","none");
  }
}


function reProduceAll(allItems) {
    /*
    清空頁面上 (#item)內容上的東西。
    讀取爬回來的每一個商品
    */

  /*
    利用for in存取
  */

//for (var  in ) {

//    produceSingleItem();
//  }

}


//  每點開一次就註冊一次
// function produceSingleItem(sinItemData){
//   /*
//     抓取 sinItemData 節點上的資料。
//     若你的sinItemData資料欄位中並沒有使用者名稱，請再到user節點存取使用者名稱
//     資料齊全後塞進item中，創建 Item 物件，並顯示到頁面上。
//   */

//  /* firebase.database().ref().once("",function () {
//     $("#items").append();

//       /*
//         用 ViewModal 填入這筆 item 的資料
//         呼叫 ViewModal callImage打開圖片
//         創建一個 MessageBox 物件，將 Message 的結構顯示上 #message 裡。
//       */


//       //$("#message").append();

//       /*
//         判斷使用者是否有登入，如果有登入就讓 #message 容器顯示輸入框。
//         在 MessageBox 上面註冊事件，當 submit 時將資料上傳。
//       */
//       if (currentUser) {
//         $("#message").append(messBox.inputBox);

//         messBox.inputBox.keypress(function (e) {
//           if (e.which == 13) {
//             e.preventDefault();

//             /*
//             取得input的內容 $(this).find("#dialog").val();
//             清空input的內容 $(this).find("#dialog").val("");
//             */
//           }
//         });
//       }

//     /*從資料庫中抓出message資料，並將資料填入MessageBox*/
    
// //  firebase.database().ref().orderBy.("",function(data) {

// //      });

//     });


//     /*
//     如果使用者有登入，替 editBtn 監聽事件，當使用者點選編輯按鈕時，將資料顯示上 uploadModal。
//     */

//   }
//  )}


function generateDialog(diaData, messageBox) {


}
