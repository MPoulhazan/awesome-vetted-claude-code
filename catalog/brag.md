# brag

> Skill that turns the project you just built into a short launch video with music, motion and share copy.

**Verdict: 🔵 Trial** · Overall **3.5/5** · [latent-spaces/brag](https://github.com/latent-spaces/brag) · [Website](https://latent-spaces.github.io/brag/)

Single-purpose, run once per launch, easy to remove. Review the video before posting.

## Scores

| Usefulness | Security | Maturity | Cost |
|---|---|---|---|
| 3/5 | 4/5 | 3/5 | 4/5 |

## What problem it solves

Shipping is easy, showing it is not. /brag reads your code, writes the story and renders brag.mp4 plus share text - handy for a README demo or a launch post.

## Security

| Runs code | Hooks | Network | Background process |
|---|---|---|---|
| Yes | No | Model API only | No |

Runs render tooling (FFmpeg, Hyperframes) locally and writes to brag-output/. Check the video and share copy for anything private before posting.

### Advisories

None published in the GitHub Advisory Database as of the last refresh.

## Install

Recommended scope: Per project (`.claude/`)

```
/plugin install brag@brag
npx skills add https://github.com/latent-spaces/brag --skill brag-slim
```

Needs FFmpeg on PATH. /brag uses Hyperframes; /brag-slim needs nothing beyond tools already on your machine. Not to be confused with brag-document tools for performance reviews.

## Facts

- **Category:** Skills
- **License:** MIT
- **Maintainer:** community
- **Stars:** 17.2k · last push 2026-10-13
- **Tags:** launch, video, marketing
- **Last reviewed:** 2026-10-20

## Sources

- https://github.com/latent-spaces/brag
- https://scriptxeno.github.io/posts/brag-claude-code-launch-video-skill/

---
[Back to the catalog](../README.md) · [Edit this entry](https://github.com/MPoulhazan/awesome-vetted-claude-code/edit/main/data/brag.yaml)
