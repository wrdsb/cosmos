# Blob Replace Contents
Replace the contents of one blob with those of another, on demand. Typically run to replace the contents of a something-previous.json with those of the corresponding something-now.json after performing a differences/changes calculation in preparation for the next calculation.

Broken out into a separate function because we can't use "inout" bindings in JavaScript.
