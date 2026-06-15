import { ContactPanel } from "../components/sections/ContactPanel";
import { PageHeader } from "../components/ui/PageHeader";

export function Contact() {
  return (
    <div>
      <PageHeader label="Contact handshake" title="Direct channels. No fake form." description="For internships, projects, or a technical conversation, use one of the direct links below." />
      <div className="mt-10"><ContactPanel /></div>
    </div>
  );
}
