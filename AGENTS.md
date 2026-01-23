```markdown
# AGENTS

## Overview

This project adopts an **agent-driven** approach, where *agents* are logical entities responsible for executing specific tasks, making decisions within clearly defined boundaries, and collaborating with humans and other agents to evolve the system in a consistent and scalable way.

The goal of agents is to **increase productivity, predictability, and quality**, not to replace human judgement, but to amplify it.

---

## What Is an Agent

An **Agent** is an autonomous or semi-autonomous unit that:

- Has a **clear purpose**
- Operates within **explicit rules and constraints**
- Executes repeatable or specialised tasks
- Produces verifiable outcomes
- Can interact with code, documentation, APIs, tools, and people

Agents are not merely scripts. They represent **intelligent operational roles** within the project.

---

## Core Principles

All agents in this project must follow these principles:

1. **Clear Scope**  
   An agent must do one thing well, and nothing beyond that.

2. **Controlled Autonomy**  
   Agents may act independently, but always within predefined rules.

3. **Auditability**  
   Actions and decisions must be traceable and understandable.

4. **Human–Agent Collaboration**  
   Agents extend human capability; they do not operate in strategic isolation.

5. **Continuous Evolution**  
   Agents are expected to evolve as the project matures.

---

## Types of Agents (Examples)

This project may include, but is not limited to:

- **Code Agents**  
  Focused on generating, reviewing, or refactoring code.

- **Docs Agents**  
  Responsible for creating, maintaining, and validating documentation.

- **QA / Review Agents**  
  Focused on quality assurance, standards, and consistency.

- **Planning Agents**  
  Supporting roadmap decisions, prioritisation, and task decomposition.

Each agent must be documented individually once created.

---

## Agent Documentation Structure

Every agent must be documented with:

- Agent name
- Purpose
- Responsibilities
- Constraints (what it **does not** do)
- Expected inputs
- Produced outputs
- Dependencies (human or technical)

---

## Boundaries and Responsibility

Agents **must not**:
- Make irreversible strategic decisions without human validation
- Modify areas outside their defined scope
- Operate without clear success criteria

Final responsibility for the system **remains with humans**.

---

## Future Direction

This repository is designed to grow towards an increasingly agent-oriented architecture, including:
- Semi-autonomous workflows
- LLM integrations
- Domain-specific agents
- Multi-agent orchestration

`AGENTS.md` is a living document. Update it whenever the vision evolves.

---

**Agents are leverage.  
Humans set the direction.**
```