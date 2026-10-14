# ServiceNow Employee IT Support Management

ServiceNow Administrator & Developer Portfolio Project

Developed by: Mohsin R

## Project Overview

I developed a scoped Employee IT Support Management application in a ServiceNow Personal Developer Instance.

The application allows employees to submit IT support requests through the Service Catalog. It automates request creation, assignment, due-date calculation, resolution validation, and notifications.

The project also includes data imports, operational reports, and a Platform Analytics dashboard.

## Business Requirements

- Provide a self-service process for employee IT support requests.
- Automatically create support records from catalog submissions.
- Route requests based on category.
- Calculate due dates based on priority.
- Validate information before requests are resolved.
- Notify users about important request updates.
- Provide reports and dashboards for support teams.

## 1. Application Development

Created a scoped application using ServiceNow Studio.

Configured a custom IT Support Request table with fields for request details, category, priority, assignment, due date, state, and resolution information.

## 2. Service Catalog

Created a Request IT Support catalog item.

Configured Flow Designer to process catalog submissions and create corresponding IT Support Request records.

## 3. Assignment Automation

Implemented category-based assignment for:

- Hardware
- Software
- Network
- Access

Flow Designer routes requests to the appropriate support groups.

## 4. Priority-Based Due Dates

Implemented automatic due-date calculation for five priority levels using GlideDateTime.

The logic calculates request deadlines based on the selected priority.

## 5. Client Scripts and Business Rules

Configured client-side validation using g_form and server-side validation using Business Rules.

Implemented resolution controls to prevent incomplete resolutions and automatically record resolution timestamps.

## 6. Email Notifications

Configured notifications for:

- Resolved IT support requests
- High-priority requests

## 7. Data Import

Imported sample support records using an Import Set and Transform Map.

Verified that the imported records were successfully created in the target table.

## 8. Reporting and Dashboard

Created operational reports and a Platform Analytics dashboard to monitor support requests and operational activity.

## 9. Testing

Tested the main application components using sample records and Flow Designer execution details.

Validated catalog submissions, assignment automation, priority-based due dates, resolution controls, data imports, and reporting.

## Skills Demonstrated

- ServiceNow Studio
- Scoped Application Development
- Service Catalog
- Flow Designer
- JavaScript
- GlideDateTime
- Client Scripts
- Business Rules
- Import Sets and Transform Maps
- Email Notifications
- Platform Analytics
- Functional Testing

## Project Environment

Platform: ServiceNow

Environment: Personal Developer Instance (PDI)

Project Type: Administrator & Developer Portfolio Project

Status: Completed hands-on training project

---

Author: Mohsin R

This project was developed independently for practical ServiceNow training and portfolio purposes. It is not a production deployment.
