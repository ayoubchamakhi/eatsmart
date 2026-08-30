# ADR 0006: Google Cloud evidence adapter

Status: accepted for the first milestone

Use Google Cloud Vision for extraction and Vertex/Gemini for structured judging behind `EvidenceExtractor` and `EvidenceJudge` interfaces. Persist provider/model/prompt version, structured result, validation outcome, confidence, latency, and cost metadata. Tests use fixtures and fakes, not paid provider calls.
