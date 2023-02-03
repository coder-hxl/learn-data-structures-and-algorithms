export interface PrintableNode {
  left: PrintableNode | null;
  right: PrintableNode | null;
  value: any;
}

export function btPrint(root: PrintableNode | null): void {
  let lines: (string|null)[][] = [];
  let level: (PrintableNode|null)[] = [];
  let next: (PrintableNode|null)[] = [];

  level.push(root);
  let nn = 1;
  let widest = 0;

  while (nn !== 0) {
    let line: (string|null)[] = [];
    nn = 0;
    for (let n of level) {
      if (n === null) {
        line.push(null);

        next.push(null);
        next.push(null);
      } else {
        let aa = n.value;
        line.push(aa);
        if (aa.length > widest) widest = aa.length;

        next.push(n.left);
        next.push(n.right);

        if (n.left !== null) nn++;
        if (n.right !== null) nn++;
      }
    }

    if (widest % 2 === 1) widest++;
    lines.push(line);
    let tmp = level;
    level = next;
    next = tmp;
    next.length = 0;
  }

  let perpiece = lines[lines.length - 1].length * (widest + 4);
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    let hpw = Math.floor(perpiece / 2) - 1;
    if (i > 0) {
      for (let j = 0; j < line.length; j++) {
        let c = " ";
        if (j % 2 === 1) {
          if (line[j - 1] !== null) {
            c = line[j] !== null ? "┴" : "┘";
          } else {
            if (j < line.length && line[j] !== null) c = "└";
          }
        }
        process.stdout.write(c);

        if (line[j] === null) {
          for (let k = 0; k < perpiece - 1; k++) {
            process.stdout.write(" ");
          }
        } else {
          for (let k = 0; k < hpw; k++) {
            process.stdout.write(j % 2 === 0 ? " " : "─");
          }
          process.stdout.write(j % 2 === 0 ? "┌" : "┐");
          for (let k = 0; k < hpw; k++) {
            process.stdout.write(j % 2 === 0 ? "─" : " ");
          }
        }
      }
      console.log();
    }

    for (let j = 0; j < line.length; j++) {
      let f = line[j];
      if (!f) f = "";
      let gap1 = Math.ceil(perpiece / 2 - (f+"").length / 2);
      let gap2 = Math.floor(perpiece / 2 - (f+"").length / 2);

      for (let k = 0; k < gap1; k++) {
        process.stdout.write(" ");
      }
      process.stdout.write(f+"");
      for (let k = 0; k < gap2; k++) {
        process.stdout.write(" ");
      }
    }
    console.log("");

    perpiece /= 2;
  }
}
