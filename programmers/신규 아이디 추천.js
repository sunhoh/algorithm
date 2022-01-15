function solution(new_id) {
    let id = new_id.toLowerCase()
      .replace(/[^a-z0-9-_.]/g, '')
      .replace(/[.]{2,}/g, '.')
      .replace(/^[.]|[.]$/g,'');
    if(id==='') id = 'a';
    if(id.length > 15){
      id = id.slice(0, 15);
      id = id.replace(/[.]$/gi,'');
    }
    while(id.length < 3){
      id += id[id.length-1];
    }
    return id;
  }
solution("...!@BaT#*..y.abcdefghijklm")



// 다른 문제 풀이
// const solution = (new_id) => {
//     const id = new_id
//         .toLowerCase()
//         .replace(/[^\w\d-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .padEnd(1, 'a')
//         .slice(0, 15)
//         .replace(/^\.|\.$/g, '')        
//     return id.padEnd(3, id[id.length-1])
// }
