### Version number (For Example: 2.5.8):
- 2:
  - Major Version
  - Breaking
  - Not safe to update
  - Breaking API change

- 5:
  - Minor Version
  - Feature.
  - safe to update
  - new features
  
- 8:
  - Patch Version
  - Fix
  - safe to update
  - bugfixes

### Tilde ( ~ ):
- ~ freezes major and minor numbers.
- It is used when you're ready to accept bug-fixes in your dependency, but don't want any potentially incompatible changes.
- The tilde matches the most recent minor version (the middle number).
- ~1.2.3 will match all 1.2.x versions, but it will miss 1.3.0.
- Tilde (~) gives you bug fix releases.

### Caret ( ^ ):
- ^ freezes the major number only.
- It is used when you're closely watching your dependencies and are ready to quickly change your code if minor release will be incompatible.
- It will update you to the most recent major version (the first number).
- ^1.2.3 will match any 1.x.x release including 1.3.0, but it will hold off on 2.0.0.
- Caret (^) gives you backwards-compatible new functionality as well.
