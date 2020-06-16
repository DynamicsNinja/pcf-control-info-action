# PCF Control Info Action

Get control name and version from the manifest file of the PCF control.

## Inputs

### `manifest-path`

**Required** Path to the folder where the manifest file is located.

## Outputs

### `control-name`

Name of the PCF control.

### `control-version`

Version of the PCF control.

## Example usage

    uses: DynamicsNinja/pcf-control-info-action@v1
    with:
      manifest-path: 'SuperCoolControl'