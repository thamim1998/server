<!-- Time Taken -->
It took approximately 1.5 day to complete this project.

<!-- Approach -->
I identified the necessary information (window.location.pathname) to extract the current path from the URL, providing a straightforward solution to meet the user's needs.

<!-- Most Difficult Part -->
The most challenging aspect was deleting a folder/file in React.

<!-- Solutions -->
To overcome this challenge, I implemented a reusable dropdown menu component for each document and kept track of their values. This approach helped in effectively managing the delete operation for folders/files.

<!-- What would you have done differently/ added it this feature would be shipped into production -->
For production, I would have used a recursive approach to handle file paths more efficiently. This would enhance scalability and maintainability, ensuring smooth navigation through nested folders.

<!-- My recursive approach for real world scenario-->
FileSystem {
    folders: {
        [key: string]: FileSystem;
    };
    files: string[];
}
