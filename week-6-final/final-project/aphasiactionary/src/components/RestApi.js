//Modified from Matthew Cox with permission
const DICTIONARY_ENDPOINT =
  "https://633aedd9471b8c3955789e47.mockapi.io/aphasiactionary/dictionary";
  //See more https://mockapi.io/projects/633aedd9471b8c3955789e48

class AphasiactionaryAPI {
  //GET - View all entries request
  //should I set my functions equal to a const?
  get = async () => {
    try {
      const resp = await fetch(DICTIONARY_ENDPOINT);
      const data = await resp.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("There was an error while pulling up your entries. Please try again.", error);
    }
  };

  //POST - Create entry request
  // post = async (wordKey) => {
  //   console.log("word key", wordKey);
  //   try {
  //     const response = await fetch(`${DICTIONARY_ENDPOINT}`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         wordKey: wordKey[0],
  //         wordValue: wordValue[1],
  //         id: id[2],
  //       }),
  //     });
  //     console.log("mainAPI postResponse:", response);
  //     await response.json();
  //     // (window.location = "/reviews");
  //     return (window.location = "/view-all-entries"); //view-all-entries or create-entry?
  //   } catch (error) {
  //     console.log("There was an error while adding your entry. Please try again.", error);
  //   }
  // };

  //PUT - Update one entry's definition request
  // put = async (wordValue) => { //Should this take in wordKey?
  //   console.log("word value:", wordValue);
  //   try {
  //     const resp = await fetch(`${DICTIONARY_ENDPOINT}/${wordValue._id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(wordValue),
  //     });
  //     console.log("resp:", resp);
  //     return await resp.json();
  //   } catch (error) {
  //     console.log("There was an error while updating your definition. Please try again.", error);
  //   }
  // };

  //DELETE - delete one whole entry request
//   delete = async (id) => {
//     try {
//       const resp = await fetch(`${DICTIONARY_ENDPOINT}/${id}`, {
//         method: "DELETE",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // body: JSON.stringify(reviewId),
//       });
//       await resp.json();
//       return (window.location = "/view-all-entries");
//     } catch (error) {
//       console.log("There was an error while deleting your entry.", error);
//     }
//   };
}

//A new instance must be created and can then import that to other components
export const aphasiactionaryAPI = new AphasiactionaryAPI();

//My Notes:
//All API calls are built here. Reference POST request in CreateEntryForm and GET, UPDATE and DELETE requests in ViewAllEntries