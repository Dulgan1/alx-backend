#!/usr/bin/env python3
"""Class BasicCache: a basic cache system"""

BaseCache = __import__('base_caching').BaseCache


class BasicCache(BaseCache):
    """
    Basic Caching system: uses self.cache_data of parent
    methods:
        get : gets cached data
        put : sets cache data
    """

    def put(self, key, item):
        """Sets data with key and item into cache data """
        if key and item:
            self.cache_data.update({key: item})

    def get(self, key):
        """Gets data with key in cache data"""
        if not key:
            return None
        return self.cache_data.get(key) if key in self.cache_data else None
