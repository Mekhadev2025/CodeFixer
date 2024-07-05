def generate_fibonacci(n):
    fibonacci_seq = [1, 1]
    for i in range(2, n):
        next_fib = fibonacci_seq[i - 1] + fibonacci_seq[i - 2]
        fibonacci_seq.append(next_fib)
    return fibonacci_seq

n = 15
print(generate_fibonacci(n))