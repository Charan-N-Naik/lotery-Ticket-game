# 🎲 Lottery Game

This is a simple **Python-based Lottery Game** that randomly generates a 3-digit lottery ticket number.  
If the **sum of all digits equals 15**, you win the lottery and get the prize! 💰

---

## 🧩 Game Rules

- Each lottery ticket contains a **3-digit number**.
- The number is **generated randomly**.
- If the **sum of all digits is 15**, you win the lottery.

Example:

| Ticket | Sum | Result |
|:-------:|:----:|:--------:|
| 7 7 7 | 21 | ❌ Lose |
| 4 6 5 | 15 | ✅ Win |

---

## 🧠 Logic Behind the Game

1. Generate a random 3-digit number using Python's `random` module.  
2. Split the number into individual digits.  
3. Calculate the **sum** of those digits.  
4. Check if the sum equals **15**.  
5. Display the result — “You Win!” or “Better Luck Next Time!”

---

## 🧰 Technologies Used

- **Python 3**
- **Random module** (for number generation)

---

## 🚀 How to Run the Project

### 1. Clone this repository
```bash
git clone https://github.com/your-username/lottery-game.git

