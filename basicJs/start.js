// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

function getStringHasMaxLength(arr){
    if (!Array.isArray(arr) || arr.length === 0) {
        return [];
      }

      let maxLength = 0;
      for (let i = 0; i < arr.length; i++) {
        const len = arr[i].length;
        maxLength = Math.max(maxLength, len);
        
      }
   

      const longestStrings = arr.filter(str => str.length === maxLength);
      return longestStrings;

}


const arr = ['aba', 'aa', 'ad', 'c', 'vcd'];
const result1 =  getStringHasMaxLength(arr);
console.log('StringHasMaxLength:', result1);


// Bài 2. Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function filterUsers(users) {

if (!Array.isArray(users) || users.length === 0) {
    return [];
  }
  const filteredUsers = users.filter(user => user.age > 25 && user.isStatus === true);
  return filteredUsers;
 
}
const resultUser = filterUsers(users);
console.log('Các người dùng có age > 25 và isStatus = true:', resultUser);


// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

function sortUsersByAgeAscending(users) {
    if (!Array.isArray(users) || users.length === 0) {
      return [];
    }
  
    const sortedUsers = users.slice().sort((a, b) => a.age - b.age);
    return sortedUsers;
  }

  const result = sortUsersByAgeAscending(users);
console.log('Các người dùng có age tăng dần:', result);

// Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

function getCountElement(arr){
    const count = {};
    arr.forEach(item => {
        if(count[item]){
            count[item] += 1

        }else{
            count[item] = 1 ;
        }
       
    });
    return count;
}

let resultObj = getCountElement(["one", "two", "three", "one", "one", "three"]);
console.log ('result is ', resultObj)
