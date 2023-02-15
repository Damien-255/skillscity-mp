export default function handler (req, res) {

    const books = [
        { 
          id: "1",
          title: "Game of Thrones",
          author: "George RR Martin",
          imgUrl: "/assets/1.png"    
        },
        { 
          id: "2",
          title: "Atomic Habits",
          author: "James Clear",
          imgUrl: "/assets/2.png"
        },
        { 
          id: "3",
          title: "Born A Crime",
          author: "Trevor Noah",
          imgUrl: "/assets/3.png"
        },
     
     ];

    res.json(books);

}