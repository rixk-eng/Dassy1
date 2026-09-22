Create a beautiful, sweet, interactive website dedicated to making **Dassy (Dasven)** smile and feel appreciated.

This is NOT an apology website and should NOT ask her to forgive me or make any decision. The purpose is simply to brighten her day, make her feel appreciated, respected, safe, and cared for.

## IMPORTANT CARD FUNCTIONALITY — MUST FOLLOW

The **Cute Compliment Section** must use interactive **3D flip cards**.

There should be **4 cards** arranged in a beautiful responsive grid.

### FRONT OF EACH CARD

The front should always show only the category/title:

💙 **A little reminder**

🌙 **For today**

✨ **One more thing**

🫶 **And finally...**

Add a subtle instruction underneath or somewhere on the section:

**"Tap a card to reveal a little message 💙"**

### CARD FLIP BEHAVIOR

When Dassy taps/clicks a card:

1. The card smoothly performs a realistic **3D flip animation**.
2. The back of the card reveals a sweet message.
3. **IMPORTANT: Every time the card is flipped, the message must be randomly selected from a list of different messages.**
4. Do NOT permanently assign only one message to each card.
5. If she flips the same card again, it should be able to show a **different message**.
6. Avoid showing the exact same message twice consecutively on the same card.
7. Each category should have its own collection of messages.
8. The messages should be randomly selected using JavaScript.
9. The card should remain visually beautiful regardless of message length.
10. Automatically adjust the text size or spacing so long messages never overflow the card.
11. When the card is flipped back to the front, flipping it again should generate another random message.

### EXAMPLE

For **"💙 A little reminder"**, do NOT use only:

> "You're more special than you probably realize."

Instead create a message pool such as:

* "You're more special than you probably realize. 💙"
* "Don't forget that you deserve good things too."
* "You may not notice it, but you bring something special into the lives of people around you."
* "You're doing better than you think."
* "You are worthy of kindness, patience, and respect."
* "Someone out there is genuinely hoping you're okay today."
* "Your presence matters more than you know."
* "You don't have to be perfect to be appreciated."
* "Even on difficult days, you are still someone worth caring about."
* "Never underestimate the little things that make you uniquely you. ✨"

For **"🌙 For today"**, create a different pool:

* "Take things slowly today. You don't have to figure everything out at once."
* "It's okay to rest when you're tired."
* "I hope today gives you at least one reason to smile."
* "Don't be too hard on yourself today."
* "Drink some water, breathe, and take things one step at a time. 💙"
* "Whatever you're carrying today, I hope it becomes a little lighter."
* "You deserve a peaceful day."
* "Give yourself permission to pause."
* "I hope something unexpectedly good happens to you today. ✨"
* "One difficult day doesn't define your whole story."

For **"✨ One more thing"**, create a different pool:

* "Your smile looks good on you, so don't forget to use it sometimes. 😊"
* "You have a beautiful way of being yourself."
* "There are little things about you that make you memorable."
* "Keep being genuine. That's something worth protecting."
* "You don't have to change who you are to be appreciated."
* "I hope you know how valuable you are."
* "Your kindness, even when it's small, can mean a lot."
* "There's something special about people who remain gentle despite difficult days."
* "You deserve people who make you feel comfortable being yourself."
* "Just a tiny reminder: you're worth appreciating. 💙"

For **"🫶 And finally..."**, create a different pool:

* "Someone out there genuinely wishes you a peaceful and happy day."
* "I hope you're taking care of yourself today."
* "Whatever happens today, don't forget to be kind to yourself."
* "I hope you find something that makes your heart feel lighter."
* "You deserve happiness without having to earn it."
* "I hope the next few days bring you more reasons to smile."
* "Please remember to rest when you need to."
* "I hope life gives you something beautiful when you least expect it. 🌷"
* "No pressure, no expectations—just a little happiness sent your way."
* "Take care always, Dassy. You deserve peaceful days. 💙"

### RANDOMIZATION REQUIREMENTS

Implement the random messages properly in JavaScript.

For each card:

```javascript
const messagePools = {
    reminder: [
        // multiple messages
    ],
    today: [
        // multiple messages
    ],
    oneMoreThing: [
        // multiple messages
    ],
    finally: [
        // multiple messages
    ]
};
```

When a card flips:

```javascript
function getRandomMessage(category) {
    // Return a random message
    // Make sure it is not identical to the previous message
}
```

Track the **previous message separately for each card** so that:

* Card 1 remembers its previous message.
* Card 2 remembers its previous message.
* Card 3 remembers its previous message.
* Card 4 remembers its previous message.

Do NOT use one global previous-message variable.

### IMPORTANT UX DETAIL

When the card is clicked for the first time:

**Front → 3D Flip → Random Message**

When clicked again:

**Back → 3D Flip → Front**

When clicked again:

**Front → 3D Flip → NEW Random Message**

Therefore, the user can repeatedly interact with the same card and discover different messages.

Add a tiny visual indicator such as:

**"Tap again for another little message ✨"**

when the card is showing the back.

## CARD DESIGN

Make the cards similar to a premium modern glassmorphism design.

Front:

* Soft baby-blue background
* White translucent glass effect
* Rounded corners
* Thin white border
* Soft shadow
* Centered emoji + title
* Subtle hover animation
* Gentle blue glow

Back:

* Same overall design
* Slightly different gradient
* Centered message
* Beautiful readable typography
* Small decorative heart or sparkle
* Message should fade in after the flip completes

### 3D FLIP EFFECT

Use CSS:

```css
perspective
transform-style: preserve-3d
backface-visibility: hidden
rotateY(180deg)
```
