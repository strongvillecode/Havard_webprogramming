people = [
    {"name": "muhfidah", "House": "tayo"},
    {"name": "saidat", "House": "sahmod"},
    {"name": "fridaw", "House": "quawiy"},
]

def f(person):
    return person["name"]

people.sort(key=f)

print(people)
