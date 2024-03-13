**Certainly! Here's a human-friendly paraphrase of the provided information:**

# Syntax Validator

This code repository includes a JavaScript function called `validateSyntax()`, along with its supporting function `checkYear(year)`. The purpose of this code is to validate a specific syntax pattern for input provided in an HTML element with the ID `petInput`.

# Functionality:

1. **`checkYear(year)`:** This function checks whether the input year falls within the specified range of 1989 to 2031.

2. **`validateSyntax()`:** This function retrieves input from an HTML element and verifies if it adheres to a specific syntax pattern. The pattern consists of the following criteria:
   - Starts with the string "pet_"
   - Followed by alphanumeric characters
   - Includes a 4-digit year between 1990 and 2030
   - The name must start with an uppercase letter

If the input adheres to this pattern, it displays "Valid Syntax 🛢️" and applies appropriate styling. Otherwise, it displays "Invalid Syntax 🛴" and adjusts the styling accordingly.

# Usage:

To utilize this code:
3. Call the `validateSyntax()` function whenever you need to validate user input.
