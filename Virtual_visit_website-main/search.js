let names = [
    "Badrinath Temple",
    "Sun Temple",
    "Brihadeeswara Temple Thanjavur",
    "Somnath Temple",
    "Kedarnath Temple",
    "Sanchi Stupa",
    "Ramanathaswamy Temple",
    "Vaishno Devi Temple",
    "Siddhivinayak Temple",
    "Gangotri Temple",
    "Golden Temple Amritsar",
    "Kashi Vishwanath Temple",
    "Shri Jagannath Temple",
    "Yamunotri Temple",
    "Meenakshi Temple",
    "Amarnath Cave Temple",
    "Lingaraja Temple",
    "Tirupati Balaji Temple",
    "Kanchipuram Temples",
    "Khajuraho Temple",
    "Virupaksha Temple",
    "Akshardham Temple",
    "Shri Digambar Jain Lal Mandir",
    "Gomateshwara Temple Shravanabelagola",
    "Ranakpur Temple",
    "Shirdi Sai Baba Temple Shirdi",
    "Shri Padmanabhaswamy Temple",
    "Dwarkadhish Temple",
    "Laxminarayan Temple",
    "Iskcon Temple Vrindavan",
    "Mahabodhi Temple",
    "Kamakhya Temple",
    "Neelkanth Mahadev Temple",
    "Mukteswara Temple",
    "Sri Ranganathaswamy Temple",
    ];
    //Sort names in ascending order
    let sortedNames = names.sort();
    
    //reference
    let input = document.getElementById("input");
    
    //Execute function on keyup
    input.addEventListener("keyup", (e) => {
      //loop through above array
      //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
      removeElements();
      for (let i of sortedNames) {
        //convert input to lowercase and compare with each string
    
        if (
          i.toLowerCase().startsWith(input.value.toLowerCase()) &&
          input.value != ""
        ) {
          //create li element
          let listItem = document.createElement("li");
          //One common class name
          listItem.classList.add("list-items");
          listItem.style.cursor = "pointer";
          listItem.setAttribute("onclick", "displayNames('" + i + "')");
          //Display matched part in bold
          let word = "<b>" + i.substr(0, input.value.length) + "</b>";
          word += i.substr(input.value.length);
          //display the value in array
          listItem.innerHTML = word;
          document.querySelector(".list").appendChild(listItem);
        }
      }
    });
    function displayNames(value) {
      input.value = value;
      removeElements();
    }
    function removeElements() {
      //clear all the item
      let items = document.querySelectorAll(".list-items");
      items.forEach((item) => {
        item.remove();
      });
    }