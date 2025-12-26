function Ackermann(m, n) {
    if (typeof m !== 'number' || typeof n !== 'number' || m < 0 || n < 0) return null;
    if (m == 0) return n + 1;
    else if (m > 0 && n == 0) return Ackermann(m - 1, 1);
    else if (m > 0 && n > 0) return Ackermann(m - 1, Ackermann(m, n - 1));
}
