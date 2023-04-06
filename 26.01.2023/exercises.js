
2.
You need to create some kind of calculator.
The argument passed to run(instructions) will always be a string 
containing a series of instructions.
The instruction set of the calculator will be this:

+ (plus): Pop the last 2 values from the stack, add them, and 
push the result onto the stack.
- (minus): Pop the last 2 values from the stack, subtract the 
lower one from the topmost one, and push the result.
* (multiple): Pop the last 2 values, multiply, and push the 
result.
/ (divide): Pop the last 2 values, divide the topmost one by 
the lower one, and push the result.
DUP: Duplicate (not double) the top value on the stack.
POP: Pop the last value from the stack and discard it.
PSH: Performed whenever a number appears as an instruction. Push 
the number to the stack.
Any other instruction (for example, a letter) should result in 
the value "Invalid instruction: [instruction]".

Examples:
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x

If there are no instructions, the value should remain 0.
The return value of get value() should be the topmost value on 
the stack.
Be careful with methods in this class!




3.
Write a class called CoffeeShop, which has three instance 
variables and seven methods. Variables are:
a) name : a string (basically, of the shop),
b) menu : an array of items (of object type), with each item 
containing the item (name of the item), type (whether food or a 
drink) and price,
c) orders : an empty array.

Methods:
a) addOrder: adds the name of the item to the end of the orders 
array if it exists on the menu. Otherwise, return "This item is 
currently unavailable!"
b) fulfillOrder: if the orders array is not empty, return "The 
{item} is ready!". If the orders array is empty, return "All 
orders have been fulfilled!"
c) listOrders: returns the list of orders taken, otherwise, an 
empty array.
d) dueAmount: returns the total amount due for the orders taken, 
round off up to two decimal places.
e) cheapestItem: returns the name of the cheapest item on the 
menu.
f) drinksOnly: returns only the item names of type drink from 
the menu.
g) foodOnly: returns only the item names of type food from the 
menu.

IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) 
order.

Examples:
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]