import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bell, Globe, Key, Shield, User } from "lucide-react";

export const Route = createFileRoute("/settings")({
  component: SettingsPage,
  head: () => ({ meta: [{ title: "Settings — Lumen" }, { name: "description", content: "Workspace settings and preferences." }] }),
});

const sections = [
  { id: "profile", icon: User, label: "Profile" },
  { id: "security", icon: Shield, label: "Security" },
  { id: "notifications", icon: Bell, label: "Notifications" },
  { id: "api", icon: Key, label: "API keys" },
  { id: "region", icon: Globe, label: "Region" },
];

function Row({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5 border-b border-white/[0.05] last:border-0">
      <div>
        <div className="text-sm font-medium">{label}</div>
        {hint && <div className="text-xs text-muted-foreground mt-1">{hint}</div>}
      </div>
      <div className="md:col-span-2">{children}</div>
    </div>
  );
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] px-3.5 text-sm focus:outline-none focus:border-primary/40 focus:bg-white/[0.06] transition"
    />
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" defaultChecked={defaultChecked} className="sr-only peer" />
      <div className="w-11 h-6 bg-white/10 rounded-full peer peer-checked:bg-gradient-primary transition relative after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition peer-checked:after:translate-x-5" />
    </label>
  );
}

function SettingsPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mb-6">
        <div className="text-xs text-muted-foreground tracking-wider uppercase">Workspace</div>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight">Settings</h1>
        <p className="mt-1.5 text-sm text-muted-foreground">Manage your account, security, and notifications.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-6">
        <motion.aside
          initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          className="glass rounded-2xl p-2 h-fit sticky top-20"
        >
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition">
              <s.icon className="h-4 w-4" /> {s.label}
            </a>
          ))}
        </motion.aside>

        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <section id="profile" className="glass rounded-2xl p-6">
            <h2 className="text-base font-semibold">Profile</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Update your personal information.</p>
            <div className="mt-4">
              <div className="flex items-center gap-4 py-5 border-b border-white/[0.05]">
                <div className="h-16 w-16 rounded-2xl bg-gradient-accent grid place-items-center text-lg font-semibold text-primary-foreground shadow-glow">AM</div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Alex Morgan</div>
                  <div className="text-xs text-muted-foreground">PNG or JPG, max 2MB</div>
                </div>
                <button className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] transition">Upload</button>
              </div>
              <Row label="Full name"><Field defaultValue="Alex Morgan" /></Row>
              <Row label="Email" hint="Used for sign-in and billing receipts."><Field defaultValue="alex@lumen.io" /></Row>
              <Row label="Role"><Field defaultValue="Workspace owner" /></Row>
            </div>
          </section>

          <section id="security" className="glass rounded-2xl p-6">
            <h2 className="text-base font-semibold">Security</h2>
            <Row label="Two-factor auth" hint="Add an extra layer of security to your account."><Toggle defaultChecked /></Row>
            <Row label="Session timeout" hint="Auto sign-out after inactivity."><Field defaultValue="30 minutes" /></Row>
            <Row label="Password"><button className="text-xs px-3 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08]">Change password</button></Row>
          </section>

          <section id="notifications" className="glass rounded-2xl p-6">
            <h2 className="text-base font-semibold">Notifications</h2>
            <Row label="Product updates"><Toggle defaultChecked /></Row>
            <Row label="Weekly digest"><Toggle defaultChecked /></Row>
            <Row label="Anomaly alerts" hint="Get notified when key metrics shift."><Toggle /></Row>
          </section>

          <div className="flex justify-end gap-2">
            <button className="h-10 px-4 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm hover:bg-white/[0.08]">Cancel</button>
            <button className="h-10 px-5 rounded-xl bg-gradient-primary text-primary-foreground text-sm font-medium hover:opacity-90 shadow-glow">Save changes</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
