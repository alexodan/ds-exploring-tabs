- DX
- Performance
- Maintainability

[Value][+]

Value, Value1

[Input]

- InputText.component.ts
- InputTextWithPlus.component.ts

- variant=""

<Modal>
<Modal.Header>
<Modal.Body>

// icons preloaded
<Button icon="bag">
// better perf
<Button icon={<Bag />}></Button>

// Overriding Styles

<div class="wrapper">
    <MyComponent styles={{  }}>
</div>

// check out https://github.com/styled-system/styled-system
<Box color='gray.0' />
connected to a theme

// search 5 design systems with Tab component and see their API
// what did u like
// Material, Radix, Carbon, Primer (https://primer.style/), catalyst (tailwind)

[] Pages with these tabs (not 5 maybe)

- BYO Tab
  [] Page with your own

- a11y
  why is important
  aria-label
  aria-hidden vs display none
  what do u test w keyboard
  tabindex="0" tabindex="-1"

Questions:
What's ur favorite CSS feature?
What's ur controversial opinion around DS? -> Deprecation

- codemod (automated script)
