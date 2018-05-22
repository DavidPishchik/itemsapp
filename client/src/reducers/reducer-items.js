// 
// let items;
// let callApi = async () => {
//     console.log("calling API");
//
//     // response service token
//     // const response = await fetch('/');
//     const response = await fetch('/api/hello');
//     console.log("response", response);
//
//     const body = await response.json();
//
//     if (response.status !== 200) throw Error(body.message);
//     console.log("body API", body);
//     items= body;
//
//     return await body;
//   };
//
//
// export default function () {
//         callApi().then(res => { items = res.express });
//
//         return items
// }

export default function () {
      return [
          {
              id: 1,
              first: "Maxx",
              last: "Flinn",
              age: 17,
              description: "Loves basketball",
              thumbnail: "https://goo.gl/1KNpiy"
          },
          {
              id: 2,
              first: "Allen",
              last: "Matt",
              age: 25,
              description: "Food Junky.",
              thumbnail: "https://goo.gl/rNLgwv"
          },
          {
              id: 3,
              first: "Kris",
              last: "Chen",
              age: 23,
              description: "Music Lover.",
              thumbnail: "https://goo.gl/EVbPHb"
          }
      ]
  }
