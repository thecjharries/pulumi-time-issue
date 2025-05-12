# Pulumi Time Issue

[The `time.Rotating` resource](https://www.pulumi.com/registry/packages/time/api-docs/rotating/) does not trigger resource re-creation.

## Steps to reproduce

1. Clone the repository.
2. Run `pulumi up` to create the initial resources (hit ENTER for the passphrase; there is none).
3. Wait at least 60 seconds.
4. Run `pulumi up` again to see if the resource is recreated.

Alternatively, import this time from the past to ensure a current run should update it.

```bash
pulumi import time:index/rotating:Rotating example 2025-05-12T19:51:58Z,2025-05-12T19:51:58Z
```
