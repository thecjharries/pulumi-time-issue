import * as pulumi from "@pulumi/pulumi";
import * as time from "@pulumiverse/time";

const example = new time.Rotating("example", { rotationMinutes: 1 });
