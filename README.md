First REACT Activity :

![alt text](<Screenshot 2025-10-03 235127.png>)

========================================================================================
First React Activity — Product Display

Overview
This project focuses on React component composition, props, and inline styling.
Learned how to pass data to child components via props.
Practiced inline styling vs CSS classes.
Explored mapping data dynamically into UI elements.
Components
- App
  -Main entry point, renders the ProductTab component.
- ProductTab
  - Uses flexbox to display multiple Product components.
  - Styles ensure items are centered and wrapped if screen width is exceeded.
- Product
  - Receives title and idx as props.
  - Displays product title, description, and price.
  - Uses the Price component to show old and new prices.
- Price
  - Receives Oprice and newPrice as props.
  - Applies inline styles for strikethrough old price and bold new price.
  - Styled container with rounded bottom corners.
Key Concepts Practiced
Component composition and props usage.
Conditional and dynamic rendering using arrays for description and pricing.
Inline styling and CSS classes for visual enhancement.
Flexbox for responsive layout and centering.
