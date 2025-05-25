import type { Cat } from "../store/types"

const cats: Cat[] = [
  {
    "id": "cat1",
    "name": "Mr. Whiskers",
    stats: {
      "weight": 14,
        "agility": 7,
        "personality": "lazy",
    "activityLevel": "low",
    "ageGroup": "adult"
    },
    "breed": "tabby",
    "alibi": "Napping on the windowsill",
    "imgSrc": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",

  },
  {
    "id": "cat2",
    "name": "Shadow",
    "breed": "black",
    stats: {
     "weight": 9,
    "agility": 9,
    "personality": "curious",
    "activityLevel": "high",
    "ageGroup": "adult"
    },
    "alibi": "Chasing a fly in the kitchen",
    "imgSrc": "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    "id": "cat3",
    "name": "Paws",
     "breed": "white",
     stats: {
 "weight": 10,
    "agility": 6,
    "personality": "mischievous",
    "activityLevel": "medium",
    "ageGroup": "adult"
     },
    "alibi": "Knocked over the plant pot",
     "imgSrc": "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    "id": "cat4",
    "name": "Mittens",
    "breed": "calico",
    stats: {
        "weight": 8,
    "agility": 8,
     "personality": "timid",
    "activityLevel": "medium",
    "ageGroup": "adult"
    },
    "alibi": "Stuck in the laundry basket",
    "imgSrc": 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    "id": "cat5",
    "name": "Tiger",
    "breed": "orange",
    stats: {
"weight": 10,
    "agility": 7,
    "personality": "bold",
    "activityLevel": "medium",
    "ageGroup": "adult"
    },
    "alibi": "Watching birds outside",
        "imgSrc": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
  },
   {
    "id": "cat6",
    "name": "Snowball",
     "breed": "white",
    stats: {
 "weight": 5,
    "agility": 9,
    "personality": "lazy",
    "activityLevel": "low",
    "ageGroup": "senior"
    },
    "alibi": "Sleeping under the couch",
        "imgSrc": "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80",
  },
  {
    "id": "cat7",
    "name": "Smokey",
    "breed": "gray",
    stats:{
"weight": 8,
    "agility": 7,
     "personality": "timid",
    "activityLevel": "low",
    "ageGroup": "senior"
    },
    "alibi": "Sitting by the fireplace",
    "imgSrc": 'https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80',
  },
  {
    "id": "cat8",
    "name": "Boots",
    "breed": "black and white",
    stats: {
"weight": 5,
    "agility": 8,
    "personality": "curious",
    "activityLevel": "high",
    "ageGroup": "kitten"
    },
    "alibi": "Playing with yarn",
    "imgSrc": 'https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400&q=80', 
  },
  {
    "id": "cat9",
    "name": "Socks",
    stats: {
 "weight": 7,
    "agility": 6,
    "personality": "bold",
    "activityLevel": "high",
    "ageGroup": "kitten"
    },
    "breed": "tabby",
    "alibi": "Looking out the window",
    "imgSrc": 'https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
  },
  {
    "id": "cat10",
    "name": "Ginger",
    "breed": "orange",
    stats: {
"weight": 9,
    "agility": 5,
    "personality": "mischievous",
    "activityLevel": "medium",
    "ageGroup": "adult"
    },
    "alibi": "Eating from the bowl",
    "imgSrc": 'https://images.unsplash.com/photo-1559235038-1b0fadf76f78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80',
  },
]

export default cats