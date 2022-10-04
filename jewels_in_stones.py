def count_jewels(jewels, stones):
    return len([jewel for jewel in stones if jewel in set(jewels)])

print(count_jewels("aA", "aAAbbbb"))
print(count_jewels("z", "ZZ"))
