import math

# Mathematical Constants
pi = math.pi  # Value of π (pi)

# Basic Mathematical Functions
x = 16
sqrt_x = math.sqrt(x)  # Square root of x
power = math.pow(x, 3)  # x raised to the power of 3
exp_value = math.exp(2)  # e^2 (Euler's number raised to the power of 2)
natural_log = math.log(10)  # Natural logarithm of 10
log_base_10 = math.log10(100)  # Base-10 logarithm of 100

# Trigonometric Functions (in radians)
angle = math.radians(45)  # Convert degrees to radians
sin_value = math.sin(angle)  # Sine of the angle
cos_value = math.cos(angle)  # Cosine of the angle
tan_value = math.tan(angle)  # Tangent of the angle

# Other Mathematical Functions
ceil_value = math.ceil(4.3)  # Ceiling function, rounds up to the nearest integer
floor_value = math.floor(4.7)  # Floor function, rounds down to the nearest integer
abs_value = math.abs(-8)  # Absolute value of a number
factorial_value = math.factorial(5)  # Factorial of 5 (5!)
gcd_value = math.gcd(36, 48)  # Greatest common divisor of 36 and 48

# Print the results
print(f"Value of pi: {pi}")
print(f"Square root of {x}: {sqrt_x}")
print(f"{x} raised to the power of 3: {power}")
print(f"e^2: {exp_value}")
print(f"Natural logarithm of 10: {natural_log}")
print(f"Base-10 logarithm of 100: {log_base_10}")
print(f"Sine of {math.degrees(angle)} degrees: {sin_value}")
print(f"Cosine of {math.degrees(angle)} degrees: {cos_value}")
print(f"Tangent of {math.degrees(angle)} degrees: {tan_value}")
print(f"Ceiling of 4.3: {ceil_value}")
print(f"Floor of 4.7: {floor_value}")
print(f"Absolute value of -8: {abs_value}")
print(f"Factorial of 5: {factorial_value}")
print(f"GCD of 36 and 48: {gcd_value}")

