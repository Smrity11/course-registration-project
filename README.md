
## Course Purchase Button
 ```
By clicking button “Select” you can choose which course you want to enroll.
# Easy to handle or purchase your desire course.
 ```
 ## Credit Management
 ```
 You can see your total Credit. Event you select your desire course then you can see rest of your remaining credit. 
# Easy to balance your credit.
 ```
 ## Course Selecting
 ```
  Now you can see which course have selected for purchase. If you select a course by clicking “select” button then you can see the course name top-left sight. And If you click a course that you have selected already then you will get a alert message that, “Course is already selected.” Don’t need to remember anymore!
# This feature will ensure you that, you can only purchase one course once
 ```

## State Management in for my Course Registration Assignment
```
In my assignment, I developed a course registration interface with several key features, including the ability to select courses, preventing double selection, displaying the total price and hours of selected courses, and managing available credits. To achieve this, I employed effective state management techniques. Below, I'll outline how I managed the state in my project.
```

## Single Course Selection
```
 One of the core features of Course Registration Assignment is ensuring that users can select a course only once. To implement this, I maintained a state variable, possibly an array or object, to keep track of the selected courses. When a user clicks on a course, I checked whether it's already in the selected courses list. If it is, I displayed an alert to notify the user that they've already selected this course. If not, I added it to the list.

  const isExist = selectCourse.find((item) => item.id === course.id);
   if (isExist) {
    toast.error('This Course is already selected.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
```
  ## Displaying Total Price and Hours/Credits
  ```
   To display the total price and hours/credits of selected courses, I continuously calculated these values based on the selected courses' data. Whenever a course was added, I updated the total price and hours/credits, and then updated the UI to reflect these changes.

  let count= course.credit
  let price =course.price

  
    selectCourse.forEach( item =>{
      count += item.credit
      price += item.price
    })
```
 ## Managing Available Credits
``` 
In the assignment, I mentioned that the site provided users with 20 hours of credit. To manage this, I maintained a state variable that kept track of the remaining credit. When a user selected a course, I deducted the course's hours from the remaining credit.

const totalRemainig =20 - count
    if(count > 20){
     toast.error('You have no credit.', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      })};
```

## Conclusion
```
 In conclusion, I managed the state in Course Registration Assignment by carefully tracking selected courses, updating the total price and hours dynamically, and managing the available credits. This ensured a seamless and user-friendly experience while preventing issues such as duplicate selections or exceeding available credits
```