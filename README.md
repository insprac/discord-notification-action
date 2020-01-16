<p align="center">
  <a href="https://github.com/actions/insprac/discord-notification-action"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# Discord Notification Action

Example usage

```yaml
jobs:
  notification-example:
    name: Notification Example
    runs-on: ubuntu-latest
    steps:
    - name: Send Notification
      uses: insprac/discord-notification-action@master
      with:
        webhook-url: ${{ secrets.DISCORD_WEBHOOK_URL }}
        title: Example Title
        message: Example message.
        color: "#b8b8b8"
        url: https://github.com/insprac/discord-notification-action
```
