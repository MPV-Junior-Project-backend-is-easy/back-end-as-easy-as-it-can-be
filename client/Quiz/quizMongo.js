const dataMongo = [
    {
      
      question: " The MongoDB explain() method does not support which of the following verbosity mode:",
      option1: "allPlansExecution",
      option2: "executionStats",
      option3: "queryPlanner",
    },
    {
      
      question:
        `Which of the following is true about sharding?`,
      option1: "We cannot change a shard key directly/automatically once it is set up",
      option2: "Sharding is enabled at the database level",
      option3: "Creating a sharded key automatically creates an index on the collection using that key",
    },
    {
      
      question:
      'In our posts collection, which command can be used to find all the posts whose author names begin lie between �A� and �C� in dictionary order?',
      option1: `db.posts.find( { post_author : { $gte : "A" , $lte : "C" } } )`,
      option2: `db.posts.find( { post_author : { $gte : "C" , $lte : "A" } } )`,
      option3: `db.posts.find( { post_author : { $gte : "C" , $lte : "A" } } )`
    },
    {
      
      question:
        "Consider that you are using { upsert : true } option in your update command. Which of the following parameters will be used to determine if any new documents were inserted:",
      option1: "nUpserted",
      option2: "nModified",
      option3: "nInserted",
    },
    {
      
      question:
        "Which of the following operator can be used to limit the number of documents in an array field of a document after an update is performed?",
      option1: "$push along with $each, $sort and $slice",
      option2: "$removeFromSet",
      option3: "$arrayLimit", 
    }
  ];
  
  export default dataMongo;