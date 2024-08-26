import * as React from "react";
import Button from "@mui/material/Button";

export default function ButtonUsage() {
  const reverseString = (name) => {
    let [firstName, lastName] = name.split(" ");
    // console.log("splitN = ", firstName, lastName);

    const reversingStringN = (str) => {
        let result = "";

      for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
      }

      return result;
    };

    let reversedFirstName = reversingStringN(firstName);
    let reversedLasrName = reversingStringN(lastName);

    return `${reversedFirstName} ${reversedLasrName}`;
  };


 // Removing duplicates from string 

//   const removeDuplicates = (str) => {
//      let uniqueString = ''
//      let seen = new Set(str)

//   }
  let name = "sriteja mettupalli";
  let resSlice = name.slice(2,7)
  let resSubString = name.substring(2,7)
  let ressubstr = name.substr(2,7)

  console.log("NAme = ",name);

  console.log("slice result = ",resSlice);
  console.log("resSubString result = ",resSubString);
  console.log("ressubstr result = ",ressubstr);


  let result = reverseString(name);
//   console.log("result = ", result);

  return <Button variant="contained">Hello world</Button>;
}
