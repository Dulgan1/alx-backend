#!/usr/bin/env python3
"""LIFO Cache system"""

BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """Implements the LIFO Cache system"""
    def __init__(self):
        super().__init__()
        self.keys = [key for key in self.cache_data]

    def put(self, key, item):
        """Sets new data into cache data"""
        if key and item:
            if len(self.cache_data) == self.MAX_ITEMS and \
                    key not in self.keys:
                ex_key = self.keys.pop()
                del self.cache_data[ex_key]
                print("DISCARD: {}".format(ex_key))
            self.keys.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """Gets data in cache with key"""
        return self.cache_data.get(key) if key and \
            key in self.cache_data else None
