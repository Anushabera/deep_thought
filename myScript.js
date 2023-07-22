// Get all accordion items and caret icons
const accordionItems = document.querySelectorAll('.accordion-item');
const caretIcons = document.querySelectorAll('.caret-icon');

// Add click event listener to each accordion header
accordionItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    const isExpanded = item.classList.contains('open');

    // Change the caret icon based on the open/close state
    caretIcons[index].style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0)';
  });
});
// Get all accordion items and caret icons
const customAccordionItems = document.querySelectorAll('.custom-accordion-item');
const customCaretIcons = document.querySelectorAll('.custom-caret-icon');

// Add click event listener to each accordion header
customAccordionItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    item.classList.toggle('open');
    const isExpanded = item.classList.contains('open');

    // Change the caret icon based on the open/close state
    customCaretIcons[index].style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0)';
  });
});

