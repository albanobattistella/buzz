window.BENCHMARK_DATA = {
  "lastUpdate": 1692528492001,
  "repoUrl": "https://github.com/chidiwilliams/buzz",
  "entries": {
    "macOS": [
      {
        "commit": {
          "author": {
            "email": "williamschidi1@gmail.com",
            "name": "Chidi Williams",
            "username": "chidiwilliams"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0da553a8278cf0d06932646f728dca4b0220d730",
          "message": "Upgrade to 0.8.4 (#579)",
          "timestamp": "2023-08-20T10:40:38Z",
          "tree_id": "8ae86c448f8a11457bbf44c4646741f1b2263993",
          "url": "https://github.com/chidiwilliams/buzz/commit/0da553a8278cf0d06932646f728dca4b0220d730"
        },
        "date": 1692528486434,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper.cpp - Tiny]",
            "value": 0.1047002047778684,
            "unit": "iter/sec",
            "range": "stddev: 0.18015923502213868",
            "extra": "mean: 9.55107969579999 sec\nrounds: 5"
          },
          {
            "name": "tests/transcriber_benchmarks_test.py::test_should_transcribe_and_benchmark[Whisper - Tiny]",
            "value": 0.04284196948779935,
            "unit": "iter/sec",
            "range": "stddev: 0.44182388542630857",
            "extra": "mean: 23.341597315799937 sec\nrounds: 5"
          }
        ]
      }
    ]
  }
}