# ?? Web Boilerplate Template

������� ��������� ������ ��� ��������-�������� �� HTML/CSS/JS � ���������� ESLint, Prettier, Stylelint � Vite.

---

## ?? ������ �������

* ? Vite ��� ������
* ?? Prettier � �������������������
* ?? Stylelint (� ���������� SCSS)
* ?? ESLint ��� JavaScript
* ?? ��������� ��� ���������� � VS Code
* ?? ������� � ��������� ������

---

## ?? ���������

```bash
npx degit ���-�����/web-boilerplate my-new-project
cd my-new-project
npm install
npm run dev
```

> ?? ��� ������� [Use this template](https://github.com/���-�����/web-boilerplate/generate) �� GitHub ��� �������� ������ �����������.

---

## ?? �������

```bash
npm run dev       # ������ dev-������� (Vite)
npm run build     # ��������� ������
npx stylelint "**/*.css" --fix    # ��������� ������
npx prettier --write .            # ������������������ ����
```

---

## ?? ��������� �������

```
+-- src/
�   +-- index.html
�   +-- main.js
�   L-- css/
�       L-- main.css
+-- .eslintrc.cjs
+-- .stylelintrc.json
+-- .prettierrc
+-- .vscode/
�   L-- settings.json
+-- package.json
L-- README.md
```

---

## ?? ������������

* ����������� VS Code � �������� �������������� �� ���������� (`Ctrl+S`) ��� Prettier/Stylelint.
* ������� ����� ������������ ��� SCSS ��� TypeScript ��� �������������.
* ������ ��������� ��� ������ ������: ������ ��������� ����� ��������� � ����������� `degit` � ����� ��������.
