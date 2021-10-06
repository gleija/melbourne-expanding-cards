<div align="center" >
  <img src="social.png" alt="firebase" title="firebase" width="600px" />
</div>

## Expanding cards example

This small projects is a quick reference to show a expanding cards example. Css courtesy of [Brad Traversy](https://github.com/bradtraversy).

## Getting Started

First of all, make sure you&#39;ve installed [Node](https://nodejs.org).

Then install dependencies:

```bash
$ yarn
```

## Workflow

Start a local development server:

```bash
$ yarn start
```

Access invoicing under `http://localhost:3000/`

Format code:

```bash
$ yarn format
```

Lint code:

```bash
$ yarn lint
```

Commit changes:

```bash
$ yarn commmit
```

## Notes

1.- When a CSS rule with two selectors chained together:

```bash
.panel.active {
  flex: 5;
}
```

It means that `Apply this style to any element that has both the class "panel" and "active"`.

Such as:

```bash
<div class="panel active">
```

2.- When using css-modules we need to find the classes in DOM as follow:

```bash
document.querySelectorAll<HTMLElement>(`.${classes.panel}`);
```

Without css-modules:

```bash
document.querySelectorAll<HTMLElement>(`.panel`);
```
